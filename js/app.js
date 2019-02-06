(function ($) {
	'use strict';
	$('.slider').ripples({
		dropRadius: 17,
		perturbance: 0.09,
	});
	
	//Sticky Navigation with Background Color
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>=400) {
			$("nav").addClass('secondary');
		} else {
			if($("nav").hasClass('secondary')) {
				$("nav").removeClass('secondary');
			}
		}
	})
})(jQuery);