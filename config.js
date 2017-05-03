const dotenvSafe = require('dotenv-safe');

const nodeEnv = process.env.NODE_ENV;
if(nodeEnv && nodeEnv === 'production') {
  // If it's running in Heroku, we set MONGO_URL to an arbitrary value so that
  // dotenv-safe doesn't throw an error. MONGO_URL is not read in Heroku as
  // MONGODB_URI will be set
  process.env.MONGO_URL = 'placeholder';
}
dotenvSafe.load();

const cfg = {};

// HTTP Port to run our web application
cfg.port = process.env.PORT || 3000;

// A random string that will help generate secure one-time passwords and
// HTTP sessions
cfg.secret = process.env.APP_SECRET || 'keyboard cat';

// Your Twilio account SID and auth token, both found at:
// https://www.twilio.com/user/account
//
// A good practice is to store these string values as system environment
// variables, and load them from there as we are doing below. Alternately,
// you could hard code these values here as strings.
cfg.accountSid = process.env.TWILIO_ACCOUNT_SID;
cfg.authToken = process.env.TWILIO_AUTH_TOKEN;

// A Twilio number you control - choose one from:
// https://www.twilio.com/user/account/phone-numbers/incoming
// Specify in E.164 format, e.g. "+16519998877"
cfg.twilioNumber = process.env.TWILIO_NUMBER;

// Your Authy production key - this can be found on the dashboard for your
// Authy application
cfg.authyKey = process.env.AUTHY_API_KEY;

// MongoDB connection string - MONGO_URL is for local dev,
// MONGODB_URI is for the MongoLab add-on for Heroku deployment
// when using docker-compose
cfg.mongoUrl = process.env.MONGODB_URI || process.env.MONGO_URL;

// Export configuration object
module.exports = cfg;
