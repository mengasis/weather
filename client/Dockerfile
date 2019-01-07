FROM mhart/alpine-node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN apk add yarn
RUN yarn install

COPY . .

EXPOSE 5000

CMD yarn build