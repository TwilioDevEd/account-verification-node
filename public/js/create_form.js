$(document).ready(function() {
    // Authy's form helpers clobber our Twitter Bootstrap styles - run a script
    // to quickly repair the visible form field
    setTimeout(function() {
        $('.countries-input').addClass('form-control');
    }, 50);
});
