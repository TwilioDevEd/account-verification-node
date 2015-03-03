var User = require('../models/User');

// Display a form that allows users to sign up for a new account
exports.showCreate = function(request, response) {
    response.render('users/create', {
        title: 'Create User Account',
        // include any errors (success messages not possible for view)
        errors: request.flash('errors')
    });
};

// create a new user based on the form submission
exports.create = function(request, response) {
    var params = request.body;
    
    // Create a new user based on form parameters
    var user = new User({
        fullName: params.fullName,
        email: params.email,
        phone: params.phone,
        countryCode: params.countryCode,
        password: params.password
    });

    user.save(function(err, doc) {
        if (err) {
            // To improve on this example, you should include a better
            // error message, especially around form field validation. But
            // for now, just indicate that the save operation failed
            request.flash('errors', 'There was a problem creating your'
                + ' account - note that all fields are required. Please'
                + ' double-check your input and try again.');

            response.redirect('/users/new');

        } else {
            response.send('cool beans');
        }
    });
};