# Dockerfile for account-verification-node

FROM node:0.12.4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/
COPY package.json /usr/src/
RUN npm install

WORKDIR /usr/src/app
COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]
