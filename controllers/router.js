var home = require('./home');
var users = require('./users');

// Map routes to controller functions
module.exports = function(app) {
    // Render home page
    app.get('/', home.show);

    // Routes for account creation
    app.get('/users/new', users.showCreate);
    app.post('/users', users.create);
};