const User = require('../models/User');

// Display a form that allows users to sign up for a new account
exports.showCreate = function(request, response) {
    response.render('users/create', {
        title: 'Create User Account',
        // include any errors (success messages not possible for view)
        errors: request.flash('errors'),
    });
};

// create a new user based on the form submission
exports.create = function(request, response) {
    const params = request.body;

    // Create a new user based on form parameters
    const user = new User({
        fullName: params.fullName,
        email: params.email,
        phone: params.phone,
        countryCode: params.countryCode,
        password: params.password,
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
        // include any errors
        errors: request.flash('errors'),
        // success messsages
        successes: request.flash('successes'),
        // Include database ID to include in form POST action
        id: request.params.id,
    });
};

// Resend a code if it was not received
exports.resend = function(request, response) {
    // Load user model
    User.findById(request.params.id, function(err, user) {
        if (err || !user) {
            return die('User not found for this ID.');
        }

        // If we find the user, let's send them a new code
        user.sendAuthyToken(postSend);
    });

    // Handle send code response
    function postSend(err) {
        if (err) {
            return die('There was a problem sending you the code - please '
                + 'retry.');
        }

        request.flash('successes', 'Code re-sent!');
        response.redirect('/users/'+request.params.id+'/verify');
    }

    // respond with an error
    function die(message) {
        request.flash('errors', message);
        response.redirect('/users/'+request.params.id+'/verify');
    }
};

// Handle submission of verification token
exports.verify = function(request, response) {
    let user = {};

    // Load user model
    User.findById(request.params.id, function(err, doc) {
        if (err || !doc) {
            return die('User not found for this ID.');
        }

        // If we find the user, let's validate the token they entered
        user = doc;
        user.verifyAuthyToken(request.body.code, postVerify);
    });

    // Handle verification response
    function postVerify(err) {
        if (err) {
            return die('The token you entered was invalid - please retry.');
        }

        // If the token was valid, flip the bit to validate the user account
        user.verified = true;
        user.save(postSave);
    }

    // after we save the user, handle sending a confirmation
    function postSave(err) {
        if (err) {
            return die('There was a problem validating your account '
                + '- please enter your token again.');
        }

        // Send confirmation text message
        const message = 'You did it! Signup complete :)';
        user.sendMessage(message, function() {
          // show success page
          request.flash('successes', message);
          response.redirect(`/users/${user._id}`);
        }, function(err) {
          request.flash('errors', 'You are signed up, but '
              + 'we could not send you a message. Our bad :(');
        });
    }

    // respond with an error
    function die(message) {
        request.flash('errors', message);
        response.redirect('/users/'+request.params.id+'/verify');
    }
};

// Show details about the user
exports.showUser = function(request, response, next) {
    // Load user model
    User.findById(request.params.id, function(err, user) {
        if (err || !user) {
            // 404
            return next();
        }

        response.render('users/show', {
            title: 'Hi there ' + user.fullName + '!',
            user: user,
            // any errors
            errors: request.flash('errors'),
            // any success messages
            successes: request.flash('successes'),
        });
    });
};
