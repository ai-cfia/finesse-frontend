#!/bin/bash

# Builds the Docker image for finesse-frontend. Passes environment variables from 
# a .env file to Docker build, addressing the need for build-time variable setting 
# in some frontend frameworks.

set -e  # Exit immediately if a command exits with a non-zero status.

BUILD_ARGS=()

while IFS='=' read -r key value; do
  BUILD_ARGS+=(--build-arg "$key=$value")
done < .env

docker build "${BUILD_ARGS[@]}" -t finesse-frontend .

echo "Docker image 'finesse-frontend' built successfully."
