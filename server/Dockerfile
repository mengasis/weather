FROM mhart/alpine-node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 1337

CMD node index.js