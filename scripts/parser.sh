#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)" # scripts folder path
DATA_DIR="$DIR/../data"

function deploy() {
  if [[ -z $(git status "$DATA_DIR/*.json" -s) ]]
  then
    echo "no changes in data directory.";
  else
      echo "changes detected.";
      git config --global user.email "action@github.com"
      git config --global user.name "GitHub Action"
      git add -A;
      timestamp=$(date --utc "+%F_%T");
      git commit -m "$timestamp UTC";
      npm version patch;
      echo "GITHUB_REPOSITORY: $GITHUB_REPOSITORY";
      DEFAULT_BRANCH=$(git remote show origin | grep 'HEAD branch' | cut -d' ' -f5);
      git push "https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_ORGANISATION_NAME}/${GITHUB_REPOSITORY_NAME}" "$DEFAULT_BRANCH" --force --follow-tags;
  fi
}

function update_data() {
  local RESPONSE=$(curl -s https://api.regional-table.region-services.aws.a2z.com/index.json | jq .prices \
    | jq '[.[] | { id: .id | split(":")[0], region: .attributes["aws:region"], serviceName: .attributes["aws:serviceName"] | gsub("^\\s+|\\s+$";""), serviceUrl: .attributes["aws:serviceUrl"] }]'
   )

  echo $RESPONSE \
    | jq '[
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
  }' > "$DATA_DIR/service_info.json"

  echo -e "\033[0;32mDone. service_info.json \033[0m"

  local REGION_INFO=$(echo $RESPONSE | jq '[group_by(.region)[] | {region: .[0].region, services: [.[] | .serviceName], count: [.[] | .serviceName] | length}] | sort_by(.region) | INDEX(.region)')
  # remove region key from value
  REGION_INFO=$(echo $REGION_INFO | jq 'map({key: .region, value: {count: .count, serviceNames: .services} }) | from_entries')
  echo $REGION_INFO | jq > "$DATA_DIR/region_info.json"
  echo -e "\033[0;32mDone. region_info.json \033[0m"

  mkdir -p "$DATA_DIR/region_info/"
  for region in $(echo $REGION_INFO | jq -r 'keys[]'); do
    echo $REGION_INFO | jq -r ".[\"$region\"]" > "$DATA_DIR/region_info/$region.json"
  done

  echo -e "\033[0;32mDone. region_info/*.json \033[0m"

}

"$@"
