<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>


# User Account Verification with Node.js/Express and Twilio Verify

[![Build Status](https://travis-ci.org/TwilioDevEd/account-verification-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/account-verification-node)

When a new user signs up for your application, you want to make sure their contact information is accurate. You also like to have some assurance they are in fact a human being! You want to make sure that every new user account in your system is an actual person you can serve.

[View the full tutorial here](https://www.twilio.com/docs/tutorials/walkthrough/account-verification/node/express)!

## Deploy On IBM Cloud

1. In IBM Cloud, set up a new Twilio Verify service.
2. Enter your Account SID and Auth Token from the [Twilio Console](https://www.twilio.com/console). 
3. Purchase a SMS capable phone number.
4. Create a new application in the [Verify Console](https://www.twilio.com/console/verify/applications).
5. Click through to 'Settings', then click the eye to reveal the key. Enter it into the `.env`.
6. Create a new Compose for MongoDB App in IBM Cloud.
7. When it is finished, navigate to new Mongo service and ‘Create connection +’.
   Connect it to the Twilio App you created.
8. In the [Cloud Dashboard](https://console.bluemix.net/dashboard/apps/), click on your  Twilio Phone Verification Service under ‘Services’, then click the ‘Create connection +’ button.  Connect it to your Twilio Verify App.
9. Set one last ENV in Cloud, `APP_SECRET`
10. Login to Cloud (ensure you have the [CLI installed](https://console.bluemix.net/docs/starters/install_cli.html)):
```
bluemix api https://api.ng.bluemix.net
bluemix login
```
11. Deploy the code:
```
bluemix app push APP_NAME
```
12. Vist your Ibm Cloud URL, register, and test! 


## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
