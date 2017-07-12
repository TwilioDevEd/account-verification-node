if (process.env.VCAP_SERVICES) {
    var env = JSON.parse(process.env.VCAP_SERVICES);
    var mongo_creds = env['compose-for-mongodb'][0].credentials;
    var uri_mongo = mongo_creds.uri;
    var ca = [new Buffer(mongo_creds.ca_certificate_base64, 'base64')];
    
    var local_creds = env['user-provided'][0].credentials;
    var accountSid = local_creds.accountSID;
    var authToken = local_creds.authToken;

} else {
    var uri_mongo = process.env.MONGO_URL;
    var ca = ""
    var accountSid = process.env.TWILIO_ACCOUNT_SID;
    var authToken = process.env.TWILIO_AUTH_TOKEN;
}


const cfg = {};

cfg.accountSid = accountSid;
cfg.authToken = authToken;
cfg.mongoUrl = uri_mongo;
cfg.authyKey = process.env.AUTHY_API_KEY;
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
