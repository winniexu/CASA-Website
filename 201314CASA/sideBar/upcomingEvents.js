$(document).ready(function() {
    //sidebar
    $('a').mouseover(function () {
        $(this).closest('.RSVP').fadeTo('medium','0.85');
    });
    $('a').mouseleave(function () {
            $(this).closest('.RSVP').fadeTo('fast','1');
    });
        
    $('#more a').mouseover(function () {
        $(this).closest('#more').fadeTo('medium','0.7');
    });
    $('#more a').mouseleave(function () {
            $(this).closest('#more').fadeTo('fast','1');
    });
});

