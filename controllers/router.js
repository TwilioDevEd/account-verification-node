var home = require('./home');
var message = require('./message');
var voice = require('./voice');
var voip = require('./voip');
var basic = require('../middleware/basic-auth');

// Map routes to controller functions
module.exports = function(app) {
    // Render home page
    app.get('/', home.show);

    // Routes for messaging examples
    app.get('/message/send', message.showSendMessage);
    app.post('/message/send', basic, message.sendMessage);
    app.get('/message', message.showReceiveMessage);
    app.post('/message', message.receiveMessageWebhook);
    app.post('/message/configure', basic, message.configureNumber);

    // Routes for voice examples
    app.get('/voice/call', voice.showMakeCall);
    app.post('/voice/call', basic, voice.makeCall);
    app.post('/voice/outbound', voice.outboundTwiml);
    app.get('/voice', voice.showReceiveCall);
    app.post('/voice', voice.receiveCallWebhook);
    app.post('/voice/configure', basic, voice.configureNumber);

    // Routes for VoIP examples
    app.get('/voip', basic, voip.show);
    app.post('/voip', voip.outboundTwiml);
    app.post('/voip/configure', basic, voip.configureNumber);
};