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

	
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }
	//console.log(wScroll/2);

});