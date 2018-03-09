#!/usr/bin/env bash
set -x
set -e

git config --global user.email 'circleci@burib.net';
git config --global user.name 'circleCI';

if [ -n "$(git status --porcelain)" ]; then
  	git add -A;
	timestamp=$(date "+%F_%T");
	git commit -m "$timestamp";
	npm version patch;
	git push --force; 

else
  echo "no changes";
fi