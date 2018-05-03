#!/bin/bash
set -e

which_end="$1"

task_name=`aws ecs list-task-definitions --family-prefix fw_$BITBUCKET_BRANCH \
             | tail -n3 \
             | head -n1 \
             | cut -d "/" -f2 \
             | sed 's/"//g'`

image_id=`aws ecs describe-task-definition --task-definition $task_name \
            | grep "$which_end:$BITBUCKET_BRANCH" \
            | cut -d ":" -f3 \
            | sed 's/", //g;s/",//g'`

tag_name=`echo "DOCKER_TAG_$which_end" | tr [a-z] [A-Z]`

sed -i "s/$tag_name/$image_id/g" ./task-definition.json
