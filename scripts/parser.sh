#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)" # scripts folder path
DATA_DIR="$DIR/../data"

function deploy() {
  git config user.email 'info@burib.net';
  git config user.name 'autobot';
  git pull $CIRCLE_REPOSITORY_URL $CIRCLE_BRANCH;

  if [[ -z $(git status "$DATA_DIR/parseddata.json" -s) ]]
  then
    echo "no changes in data directory.";
  else
      echo "changes detected.";
      git add -A;
      timestamp=$(date --utc "+%F_%T");
      git commit -m "$timestamp UTC";
      npm version patch;
      git push $CIRCLE_REPOSITORY_URL $CIRCLE_BRANCH --force --follow-tags;
  fi
}

function get_services() {
  curl -s https://api.regional-table.region-services.aws.a2z.com/index.json | jq .prices | jq '[.[] | { region: .attributes["aws:region"], serviceName: .attributes["aws:serviceName"], serviceUrl: .attributes["aws:serviceUrl"] | sub("https://"; ""; "g") | sub("aws.amazon.com/"; ""; "g") | sub("www."; ""; "g") | sub(".aws"; ""; "g") | sub("/"; ""; "g") }]' | jq '[
          group_by(.serviceName)[] | {
                          name: .[0].serviceName,
                          count: [.[] | .region] | length,
                          regions: [.[] | .region],
                          id: .[0].serviceUrl
                  }
  ] | sort_by(.name) | INDEX(.id) |
  {
    "servicesCount": . | keys | length,
    "services": .,
    "serviceNames": . | to_entries | map({key: .key, value: .value.name}) | from_entries,
    "regionSummary": {},
    "edgeLocations": [],
    "regionalEdgeCaches": [],
    "regionsCount": 0,
    "edgeLocationsTotalCount": 0,
    "edgeLocationsCount": 0,
    "regionalEdgeCachesCount": 0
  }'
}

function update_data() {
    get_services > "$DATA_DIR/parseddata.json"
}

"$@"
