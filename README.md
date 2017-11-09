<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>


# User Account Verification with Node.js/Express and Twilio

[![Build Status](https://travis-ci.org/TwilioDevEd/account-verification-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/account-verification-node)

When a new user signs up for your application, you want to make sure their contact information is accurate. You also like to have some assurance they are in fact a human being! You want to make sure that every new user account in your system is an actual person you can serve.

[View the full tutorial here](https://www.twilio.com/docs/tutorials/walkthrough/account-verification/node/express)!

## Local Development

This project is build using [Node.js](https://nodejs.org) and depends on [MongoDB](https://www.mongodb.com).

1. First clone this repository and `cd` into it.

   ```bash
   git clone git@github.com:TwilioDevEd/account-verification-node.git
   cd account-verification-node
   ```

1. Copy the sample configuration file and edit it to match your configuration.

   ```bash
   cp .env.example .env
   ```

   You can find your `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` in your
   [Twilio Account Settings](https://www.twilio.com/user/account/settings).

   You will also need a `TWILIO_NUMBER`, which you may find in the [Twilio phone numbers console](https://www.twilio.com/user/account/phone-numbers/incoming).

   The `AUTHY_API_KEY` can be found in the [Authy dashboard](https://dashboard.authy.com/).

   Leave `MONGO_URL` with the default value of `mongodb://localhost/account-verification`.

1. Start the server.

   ```bash
   npm start
   ```

1. Check it out at [http://localhost:3000](http://localhost:3000).

## Docker Local Development

1. Make sure [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/install/) are installed.

1. Set `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_NUMBER` and `AUTHY_API_KEY` configuration variables as explained above.

1. Build the containers with:

  ```bash
  docker-compose build
  ```

1. Get the name of the Mongo container with:

  ```bash
  docker-compose ps
  ```

  Then set the `MONGO_URL` configuration variable in `.env` to `mongodb://{mongo-container-name}/account-verification`.

1. Remove the project's **node_modules** folder.

1. Finally, run the following commands to start your Docker containers.

   ```bash
   docker-compose up -d
   ```

1. Check it out at [http://localhost:3000](http://localhost:3000).

## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
