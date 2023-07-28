#!/bin/sh -e

docker run --rm --detach --network host --name static-nginx  \
    -v ./static:/usr/share/nginx/html nginx 2>&1 1>/dev/null