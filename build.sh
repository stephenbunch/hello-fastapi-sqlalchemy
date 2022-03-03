#!/bin/bash

docker buildx build --platform linux/amd64 -f Dockerfile.build -t stephenbunch/hello-fastapi-sqlalchemy:latest .
docker push stephenbunch/hello-fastapi-sqlalchemy:latest
