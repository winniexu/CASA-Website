$(document).ready(function() {
    //images//
    $('li').mouseover(function () {
        $(this).find('.descr').fadeIn('medium');
        $(this).find('.fb').fadeIn('medium'); 
	$(this).find('.info img').fadeOut('medium');
    });
    $('li').mouseleave(function () {
        $(this).find('.descr').fadeOut('medium'); 
        $(this).find('.fb').fadeOut('medium'); 
	$(this).find('.info img').fadeIn('medium');
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


