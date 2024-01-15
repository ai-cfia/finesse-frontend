FROM node:18.16.0-alpine AS build

WORKDIR /code

ENV REACT_APP_BACKEND_URL=https://finesse.ninebasetwo.xyz/api

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
