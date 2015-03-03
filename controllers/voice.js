// Render a form that will allow the user to place an outbound call 
// to a phone number they entered.
exports.showMakeCall = function(request, response) {

};

// Handle a form POST to make an outbound call to a given number
exports.makeCall = function(request, response) {

};

// Render TwiML instruxctions for the outbound call initiated by makeCall
// above
exports.outboundTwiml = function(request, response) {

};

// Show a page displaying text/picture messages that have been sent to this
// web application, which we have stored in the database
exports.showReceiveCall = function(request, response) {

};

// Handle a POST request from Twilio for an incoming Call
exports.receiveCallWebhook = function(request, response) {

};

// Update the configured Twilio number for this demo to send all incoming
// calls to this server
exports.configureNumber = function(request, response) {

};