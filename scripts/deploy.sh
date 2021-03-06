#!/usr/bin/env bash
set -x
set -e

git config user.email 'info@burib.net';
git config user.name 'autobot';
git pull $CIRCLE_REPOSITORY_URL $CIRCLE_BRANCH;

BASEDIR=$(cd "$(dirname "$1")" && pwd)/$(basename "$1")

if [[ -z $(git status ${BASEDIR}data/parseddata.json -s) ]]
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
