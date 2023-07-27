# syntax=docker/dockerfile:1
FROM mcr.microsoft.com/devcontainers/javascript-node:0-18 AS build
ARG REACT_APP_BACKEND_URL
WORKDIR /code
COPY ./src ./src
COPY ./public ./public
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
RUN npm install --include=dev
RUN REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL npm run build
RUN CI=1 npm run test

FROM node
WORKDIR /code

COPY --from=build /code/build ./build
RUN npm install -g serve

ENTRYPOINT serve -s build