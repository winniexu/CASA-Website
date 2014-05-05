/**
 * File Name: index.js
 * Author:    Jingwen Xu (Winnie)
 * Purpose:   Javascript/jQuery functions behind homepage. 
 * Date:      Wednesday, July 10, 2013
 */

$(document).ready(function() { 
    //slideshow//
    $('#slideshow').cycle({ 
        fx: 'fade', 
	pause: 0.5,
	next: '#next',
	prev: '#prev'
    });	

    $('.sponsors').cycle({ 
        fx: 'fade', 
	pause: 0.5,
    });	


   //buttons//
    $('#next').hover(function () {
        $('#next img').fadeIn();
    },
             function() {
        $('#next img').fadeOut();
    });

    $('#prev').hover(function () {
        $('#prev img').fadeIn();
    },
             function() {
        $('#prev img').fadeOut();
    });

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

    //subnavs//
    $('.about').mouseover(function () {
        $('.about ul').stop(true,true).slideDown('medium');
        $('.about').mouseleave(function () {
            $('.about ul').slideUp('medium');
        });
    });
    
    $('.events').mouseover(function () {
        $('.events ul').stop(true,true).slideDown('medium');
        $('.events').mouseleave(function () {
            $('.events ul').slideUp('medium');
        });
    });
});
