#! /usr/bin/bash
git --version

git fetch
git pull development

$MERGE_RESULT = $(git merge --no-commit);
if [ $MERGE_RESULT != 0 ]; then
  echo 'DO MERGE';
  echo $MERGE_RESULT;
else
  echo 'NO MERGE';
fi
