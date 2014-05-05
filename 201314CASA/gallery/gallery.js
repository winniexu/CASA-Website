$(document).ready(function() {
    $('.slideshow').cycle({ 
        fx: 'fade', 
	pause: 0.01,
    });	 
    //subnavs//
    $('.about').mouseover(function () {
        $('.about ul').stop(true, true).slideDown('medium');
        $('.about').mouseleave(function () {
            $('.about ul').slideUp('medium');
        });
    });
    
    $('.events').mouseover(function () {
        $('.events ul').stop(true, true).slideDown('medium');
        $('.events').mouseleave(function () {
            $('.events ul').slideUp('medium');
        });
    });
});

