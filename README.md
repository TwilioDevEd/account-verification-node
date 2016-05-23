# User Account Verification with Node.js/Express and Twilio

[![Build Status](https://travis-ci.org/TwilioDevEd/warm-transfer-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/warm-transfer-node)

When a new user signs up for your application, you want to make sure their contact information is accurate. You also like to have some assurance they are in fact a human being! You want to make sure that every new user account in your system is an actual person you can serve.

[View the full tutorial here](https://www.twilio.com/docs/tutorials/walkthrough/account-verification/node/express)!

## Deploy On Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/TwilioDevEd/account-verification-node)

## Local Development

This project is build using [Node.js](https://nodejs.org) and depends on [MongoDB](https://www.mongodb.com).

1. First clone this repository and `cd` into it.

   ```bash
   $ git clone git@github.com:TwilioDevEd/warm-transfer-node.git
   $ cd warm-transfer-node
   ```

1. Copy the sample configuration file and edit it to match your configuration.

   ```bash
   $ cp .env.example .env
   ```

   You can find your `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` in your
   [Twilio Account Settings](https://www.twilio.com/user/account/settings).
   You will also need a `TWILIO_NUMBER`, which you may find [here](https://www.twilio.com/user/account/phone-numbers/incoming).
   The `AUTHY_API_KEY` can be found [here](https://dashboard.authy.com/).

   Run `source .env` to export the environment variables.

1. Make sure the tests succeed.

   ```bash
   $ npm test
   ```

1. Start the server.

   ```bash
   $ npm start
   ```

1. Check it out at [http://localhost:3000](http://localhost:3000).

## Docker Local Development

1. Make sure [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/install/) are installed.

1. Set the required environments variables.

1. Finally, run the following commands to start your Docker containers.

   ```
   $ docker-compose up -d
   ```

1. Check it out at [http://localhost:3000](http://localhost:3000).

## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
