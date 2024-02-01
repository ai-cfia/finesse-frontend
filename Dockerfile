FROM node:18.16.0-alpine AS build

WORKDIR /code

ARG ARG_VITE_BACKEND_URL
ARG ARG_VITE_DEBUG_MODE
ARG ARG_VITE_GITHUB_API_URL
ARG ARG_VITE_SEARCH_SOURCE

ENV VITE_BACKEND_URL=${ARG_VITE_BACKEND_URL:-/api}
ENV VITE_DEBUG_MODE=${ARG_VITE_DEBUG_MODE:-True}
ENV VITE_GITHUB_API_URL=${ARG_VITE_GITHUB_API_URL:-https://api.github.com/repos/ai-cfia/finesse-data/contents}
ENV VITE_SEARCH_SOURCE=${ARG_VITE_SEARCH_SOURCE:-azure}

COPY ./src ./src
COPY ./public ./public
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .

RUN npm install -g npm@9.8.1
RUN npm install --include=dev
RUN npm run build
RUN CI=1 npm run test

RUN npm install -g serve

ENTRYPOINT serve -s build
