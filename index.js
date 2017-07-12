const http = require('http');
const mongoose = require('mongoose');
const config = require('./config');

// Initialize database connection - throws if database connection can't be
// established

// initialize MongoDB connection
if (process.env.VCAP_SERVICES) {
    mongoose.connect(
        config.mongoUrl,
        config.mongoDbOptions
    );
} else {
    mongoose.connect(
        config.mongoUrl
    );
}
mongoose.Promise = Promise;

// Create Express web app
const app = require('./webapp');

// Create an HTTP server and listen on the configured port
const server = http.createServer(app);
server.listen(config.port, function() {
    console.log('Express server listening on *:' + config.port);
});
