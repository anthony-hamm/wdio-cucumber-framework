#!/bin/sh

# build image, use dockerhub tag
docker build -t hamm/e2e .

# start stack detached, force recreate containers to resolve the selenimu hub session issues
docker-compose up -d --force-recreate

# run tests
docker exec hamm-e2e npm run test:docker 

# stop stack
docker-compose down
