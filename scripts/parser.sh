#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)" # scripts folder path
DATA_DIR="$DIR/../data"
SOURCE_URL="https://api.regional-table.region-services.aws.a2z.com/index.json"

function deploy() {
  if [[ -z $(git status "$DATA_DIR/*.json" -s) ]]
  then
    echo "no changes in data directory.";
  else
      echo "changes detected.";
      # release notes: what changed between the last committed data and the new data
      local NOTES VERSION
      NOTES=$(mktemp)
      node "$DIR/changelog.js" <(git show HEAD:data/service_info.json) "$DATA_DIR/service_info.json" \
        <(git show HEAD:data/china.json 2>/dev/null || true) "$DATA_DIR/china.json" > "$NOTES"
      cat "$NOTES"
      git config --global user.email "action@github.com"
      git config --global user.name "GitHub Action"
      # only stage the generated files, never anything else lying around in the workspace
      git add "$DATA_DIR" "$DIR/../assets" "$DIR/../README.md" "$DIR/../region_code_to_name_map.json";
      timestamp=$(date --utc "+%F_%T");
      git commit -m "$timestamp UTC";
      npm version patch;
      # credentials come from actions/checkout; no --force, so a bad run can never rewrite history
      git push origin HEAD --follow-tags;
      # a GitHub release lets people follow changes (Watch -> Releases, or the releases.atom feed);
      # warn instead of failing so a release problem never blocks the npm publish
      VERSION=$(node -p "require('$DIR/../package.json').version")
      gh release create "v$VERSION" --title "v$VERSION" --notes-file "$NOTES" --verify-tag \
        || echo "::warning::Could not create GitHub release v$VERSION"
  fi
}

function update_data() {
  # declared separately: `local X=$(cmd)` would hide a failing cmd from `set -e`
  local RAW RESPONSE REGION_INFO
  RAW=$(curl -fsS --max-time 60 --retry 3 "$SOURCE_URL")
  RESPONSE=$(jq '[.prices[] | { id: .id | split(":")[0], region: .attributes["aws:region"], serviceName: .attributes["aws:serviceName"] | gsub("^\\s+|\\s+$";""), serviceUrl: .attributes["aws:serviceUrl"] }]' <<< "$RAW")

  # refuse to overwrite good data with an empty or broken feed
  if [[ $(jq 'length' <<< "$RESPONSE") -lt 100 ]]; then
    echo "source returned too few entries, not updating data" >&2
    exit 1
  fi

  # region codes become file names below, so only allow plain region codes
  local BAD_REGIONS
  BAD_REGIONS=$(jq -r '[.[].region | select(type != "string" or (test("^[a-z0-9-]+$") | not))] | unique | .[]' <<< "$RESPONSE")
  if [[ -n "$BAD_REGIONS" ]]; then
    echo "unexpected region codes in source data: $BAD_REGIONS" >&2
    exit 1
  fi

  jq '[
          group_by(.serviceName)[] | {
                          code: .[0].id,
                          name: .[0].serviceName,
                          count: [.[] | .region] | length,
                          regions: [.[] | .region],
                          url: .[0].serviceUrl
                  }
  ] | sort_by(.name) | INDEX(.code) |
  {
    "servicesCount": . | keys | length,
    "services": .,
    "serviceNames": . | to_entries | map({key: .key, value: .value.name}) | from_entries,
    "regionCodes":  . | to_entries | map(.value.regions) | flatten | unique | sort,
    "regionsCount": . | to_entries | map(.value.regions) | flatten | unique | length,
  }' <<< "$RESPONSE" > "$DATA_DIR/service_info.json"

  echo -e "\033[0;32mDone. service_info.json \033[0m"

  REGION_INFO=$(jq '[group_by(.region)[] | {region: .[0].region, services: [.[] | .serviceName], count: [.[] | .serviceName] | length}] | sort_by(.region) | INDEX(.region)' <<< "$RESPONSE")
  # remove region key from value
  REGION_INFO=$(jq 'map({key: .region, value: {count: .count, serviceNames: .services} }) | from_entries' <<< "$REGION_INFO")
  jq . <<< "$REGION_INFO" > "$DATA_DIR/region_info.json"
  echo -e "\033[0;32mDone. region_info.json \033[0m"

  mkdir -p "$DATA_DIR/region_info/"
  # start clean so regions that disappeared from the feed don't linger
  rm -f "$DATA_DIR/region_info/"*.json
  local region
  while IFS= read -r region; do
    jq --arg r "$region" '.[$r]' <<< "$REGION_INFO" > "$DATA_DIR/region_info/$region.json"
  done < <(jq -r 'keys[]' <<< "$REGION_INFO")

  echo -e "\033[0;32mDone. region_info/*.json \033[0m"

  # AWS China is not in the global feed; add it from amazonaws.cn (keeps the last copy if that fails)
  node "$DIR/china.js"
}

"$@"
