const home = require('./home');
const users = require('./users');

// Map routes to controller functions
module.exports = function(app) {
    // Render home page
    app.get('/', home.show);

    // Routes for account creation
    app.get('/users/new', users.showCreate);
    app.post('/users', users.create);
    app.get('/users/:id/verify', users.showVerify);
    app.post('/users/:id/verify', users.verify);
    app.post('/users/:id/resend', users.resend);
    app.get('/users/:id', users.showUser);
};
