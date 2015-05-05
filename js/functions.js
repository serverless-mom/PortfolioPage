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
	//console.log(wScroll/2);

});