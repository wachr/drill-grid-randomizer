#!/bin/sh -e

docker run -it --rm --name npm-container --network host -u `id -u`:`id -g`  \
    -v ~/.npmrc:/home/node/.npmrc -v ~/.npm:/home/node/.npm  \
    -v `pwd`:`pwd` -w `pwd`  \
    node:lts $*
