FROM mhart/alpine-node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
RUN npm install -g serve

COPY . .

EXPOSE 5000

CMD npm run build && serve -s ./build -p 5000