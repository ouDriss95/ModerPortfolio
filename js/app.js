(function ($) {
	'use strict';
	$('.slider').ripples({
		dropRadius: 17,
		perturbance: 0.09,
	});
	
	//Sticky Navigation with Background Color
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>=100) {
			$("nav").addClass('secondary');
		} else {
			if($("nav").hasClass('secondary')) {
				$("nav").removeClass('secondary');
			}
		}
	});

	// Porfolio isotope and filter
	var portfolioIsotope = $('.portfolio-container').isotope({
		itemSelector: '.portfolio-item',
		layoutMode: 'fitRows'
	});

	$('#portfolio-flters li').on('click', function () {
		$("#portfolio-flters li").removeClass('filter-active');
		$(this).addClass('filter-active');

		portfolioIsotope.isotope({ filter: $(this).data('filter') });
	});

	// Magnific Popup
	$('.portfolio-container').magnificPopup({
		delegate: 'a.link-preview', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true
		}
	});

})(jQuery);