$(document).ready(function() {
    // Power JS close for info messages
    $('.message-list').on('click', 'i', function(e) {
        $(this).parent().fadeOut();
    });
});
