var auth = require('http-auth');
var appInfo = require('../package.json');
var config = require('../config');
var USER = config.basic.username;
var PASS = config.basic.password;

// HTTP Basic auth configuration
var basic = auth.basic({
    realm: appInfo.name
}, function(username, password, callback) {
    // test against configured username/password
    callback(username === USER && password === PASS);
});

// Create Connect middleware from basic auth config
module.exports = auth.connect(basic);