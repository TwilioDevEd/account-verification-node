# Dockerfile for account-verification-node

FROM node:0.12.4

RUN mkdir -p /usr/src/app

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

# set TWILIO_NUMBER, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, MONGO_URL, AUTHY_API_KEY