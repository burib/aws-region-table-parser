#!/usr/bin/env bash
set -x
set -e

git config user.email 'circleci@burib.net';
git config user.name 'circleCI';
git pull $CIRCLE_REPOSITORY_URL $CIRCLE_BRANCH;

if [[ -z $(git status -s) ]]
then
  echo "no changes";
else
    echo "changes detected.";
    git add -A;
    timestamp=$(date --utc "+%F_%T");
    git commit -m "$timestamp";
    npm version patch;
    git push $CIRCLE_REPOSITORY_URL $CIRCLE_BRANCH --force;
fi
