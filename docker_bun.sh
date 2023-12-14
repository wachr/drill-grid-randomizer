#!/bin/sh -e

docker run -it --rm  \
    --name $(basename `pwd`)-container-$(ps -o pid= | head -n 1 | tr -d ' ')  \
    -u `id -u`:`id -g` -v `pwd`:/home/bun/app oven/bun $*
