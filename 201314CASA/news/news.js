$(document).ready(function() {
    $('#slideshow').cycle({ 
        fx: 'fade', 
	pause: 0.01,
	next: '#next',
	prev: '#prev'
    });	

    $('#prev').hover(function(){
      $('#prev img').fadeIn(); },
      	             function(){
      $('#prev img').fadeOut();
    });  
    $('#next').hover(function(){
      $('#next img').fadeIn(); },
      	             function(){
      $('#next img').fadeOut();
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
