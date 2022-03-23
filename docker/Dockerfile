FROM node:17-alpine3.14 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

FROM node:17-alpine3.14 as production

ENV NODE_ENV=prod

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .
