#!/usr/bin/env bash
set -x
set -e

git config user.email 'circleci@burib.net';
git config user.name 'circleCI';

if [ -n "$(git diff --exit-code)" ]; then
  	git add -A;
	timestamp=$(date --utc "+%F_%T");
	git commit -m "$timestamp";
	npm version patch;
	git push $CIRCLE_REPOSITORY_URL $CIRCLE_BRANCH --force; 

else
  echo "no changes";
fi