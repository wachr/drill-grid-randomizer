#!/bin/sh -e

docker run --rm -d --name static-nginx -v ./static:/usr/share/nginx/html nginx
docker inspect -f '{{range.NetworkSettings.Networks}}http://{{.IPAddress}}:80{{end}}' static-nginx

