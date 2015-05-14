$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	$('.logo').css({
		'transform':'translate(0px, '+ (wScroll/2.2)  +'%)'
	});

	$('.background-character').css({
		'transform':'translate(0px, '+ (wScroll/4)  +'%)'
	});


	$('.foreground-character').css({
		'transform':'translate(0px, '+ (wScroll/-30)  +'%)'
	});
//reveals the thumbnails once we've scrolled far enough down

  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.4)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }
  //controls the 'large image viewer'

  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 200) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }


});