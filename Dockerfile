# syntax=docker/dockerfile:1
FROM node:18.16.0-alpine AS build
ARG REACT_APP_BACKEND_URL
ARG REACT_APP_BASENAME
ARG REACT_APP_DEBUG_MODE
ARG REACT_APP_GITHUB_API_URL
ARG REACT_APP_SEARCH_SOURCE

WORKDIR /code
COPY ./src ./src
COPY ./public ./public
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
RUN npm install -g npm@9.8.1
RUN npm install --include=dev
RUN npm run build
RUN CI=1 npm run test

FROM node
WORKDIR /code

COPY --from=build /code/build ./build
RUN npm install -g serve

ENTRYPOINT serve -s build
