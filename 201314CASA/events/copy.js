$(document).ready(function() {
   var limit = 0;
   
    //$(".block").animate({"left": "-=550px"}, "slow");
    $('.buttons').hover(function () {
      $(this).find('img').fadeTo("medium", 0.80);}, 
                      function() {
      $(this).find('img').fadeTo("medium", 0.50);
      });
   $("#next").click(function () {
        
        //if(limit < 320)
        {
        $(".block").animate({
            "left": "-=335px"
        }, "slow");
            
        var last = $("#last");
        var lastPos = last.position();
        var lastRight = lastPos.left + 320;

        var timeline = $(".bar");
        var timePos = timeline.position();
        var timeLeft = timePos.left + 970;
        if (lastRight > timeLeft) {

        }
            limit = limit + 320;
        }
    });
    $("#prev").click(function(){
         //if(limit > 0)
        {
        $(".block").animate({
            "left": "+=335px"
        }, "slow");
            limit = limit - 320;
        }      
    });
    
    /*while($('.expandedGrid').is(':visible')) {
    $(window).resize(function() {
       var timeline = $(".bar");
       var position = timeline.position();
       var moveLeft = {'left' : position.left + 5};
       $(".block").animate(moveLeft, "slow");
      });
    }*/

$(".more a").click(function(event){
  event.preventDefault();
  var $target = $(event.target);
  if($('.expandedGrid').width() > "320px") {
  $('.expandedGrid').slideUp(1000);
  }
  //expand container height
  $('#container').animate({
    height: "1600",
  },100);

    //align grids to timeline
    var timeline = $(".bar");
    var position = timeline.position();
    var moveLeft = {'left' : position.left - 10};

    var currPos = $target.closest('.block').position();
    var difference = position.left - currPos.left - 10;
    moveLeft = {'left' : "+=" + difference};
    $('.block').animate(moveLeft, "slow");
  

  $target.closest('.block').animate({
    width: "970px",
  },1500);
  
  $target.closest('.block').find(".transitionGrid").fadeIn('medium');
  $target.closest('.block').find(".transitionGrid").delay(10).animate({
    display: "block",
    width: "970px",
  }, 1500 );
  $target.closest('.block').find('.expandedGrid').delay(2000).slideDown(1000);
});

$(".close a").click(function(event){
  event.preventDefault();
  var $target = $(event.target);
  
  $target.closest('.block').find('.expandedGrid').slideUp(1000);
  $target.closest('.block').find(".transitionGrid").delay(1000).animate({
    display: "block",
    width: "320px",
  }, 1500 );
  $target.closest('.block').delay(1000).animate({
    width: "320px",
  }, 1500 );
  $target.closest('.block').find(".transitionGrid").fadeOut('fast');
    
    //align grids to timeline
    var timeline = $(".bar");
    var position = timeline.position();
    var moveLeft = {'left' : position.left - 10};

    var currPos = $target.closest('.block').position();
    var difference = position.left - currPos.left - 10;
    moveLeft = {'left' : "+=" + difference};
    $('.block').animate(moveLeft, "slow");
 
  $('#container').animate({
    height: "700",
  },1500);


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



