FROM node:18.16.0-alpine AS build

WORKDIR /code

ARG ARG_REACT_APP_BACKEND_URL
ARG ARG_REACT_APP_DEBUG_MODE
ARG ARG_REACT_APP_GITHUB_API_URL
ARG ARG_REACT_APP_SEARCH_SOURCE

ENV REACT_APP_BACKEND_URL=${ARG_REACT_APP_BACKEND_URL:-https://finesse.ninebasetwo.xyz/api}
ENV REACT_APP_DEBUG_MODE=${ARG_REACT_APP_DEBUG_MODE:-True}
ENV REACT_APP_GITHUB_API_URL=${ARG_REACT_APP_GITHUB_API_URL:-https://api.github.com/repos/ai-cfia/finesse-data/contents}
ENV REACT_APP_SEARCH_SOURCE=${ARG_REACT_APP_SEARCH_SOURCE:-azure}

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
