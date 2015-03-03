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
            // If the user is created successfully, send them an account
            // verification token
            user.sendAuthyToken(function(err) {
                if (err) {
                    request.flash('errors', 'There was a problem sending '
                        + 'your token - sorry :(');
                }

                // Send to token verification page
                response.redirect('/users/'+doc._id+'/verify');
            });
        }
    });
};

// Display a form that allows users to enter a verification token
exports.showVerify = function(request, response) {
    response.render('users/verify', {
        title: 'Verify Phone Number',
        // include any errors (success messages not possible for view)
        errors: request.flash('errors'),
        // Include database ID to include in form POST action
        id: request.params.id
    });
};

// Handle submission of verification token
exports.verify = function(request, response) {
    // Load user model
    User.findById(request.params.id, function(err, user) {
        if (err || !user) {
            return die('User not found for this ID.');
        }

        // If we find the user, let's validate the token they entered
        user.verifyAuthyToken(request.body.code, function(err) {
            if (err) {
                return die('The token you entered was invalid - please retry.');
            }

            // If the token was valid, flip the bit to validate the user account
            user.verified = true;
            user.save(function(err) {
                if (err) {
                    return die('There was a problem validating your account '
                        + '- please enter your token again.');
                }

                response.send('yay!');
            });
        });
    });

    // respond with an error
    function die(message) {
        request.flash('errors', message);
        response.redirect('/users/'+request.params.id+'/verify');
    }
};
