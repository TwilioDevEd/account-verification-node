if (process.env.VCAP_SERVICES) {
    var env = JSON.parse(process.env.VCAP_SERVICES);
    var mongoCreds = env['compose-for-mongodb'][0].credentials;
    var uriMongo = mongoCreds.uri;
    var ca = [new Buffer(mongoCreds.ca_certificate_base64, 'base64')];
    
    var localCreds = env['user-provided'][0].credentials;
    var accountSid = localCreds.twilio_account_sid;
    var authToken = localCreds.twilio_auth_token;
    var authyKey = localCreds.app_api_key;
} else {
    var uri_mongo = process.env.MONGO_URL;
    var ca = ""
    var accountSid = process.env.TWILIO_ACCOUNT_SID;
    var authToken = process.env.TWILIO_AUTH_TOKEN;
    var authyKey = process.env.AUTHY_API_KEY;
}


const cfg = {};

cfg.accountSid = accountSid;
cfg.authToken = authToken;
cfg.mongoUrl = uriMongo;
cfg.authyKey = authyKey;
cfg.port = process.env.PORT || 3000;
cfg.twilioNumber = process.env.TWILIO_NUMBER;
cfg.secret = process.env.APP_SECRET || 'keyboard cat';
cfg.mongoDbOptions = {
    mongos: {
        ssl: true,
        sslValidate: true,
        sslCA: ca,
        poolSize: 1,
        reconnectTries: 1
    }
}

// Export configuration object
module.exports = cfg;
