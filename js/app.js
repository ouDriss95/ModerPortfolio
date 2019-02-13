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
			$("nav").css("background-color", "#233656");
		} else {
			$("nav").css("background-color", "transparent");
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
	/* On isotope v2 hidden class is not defined.
	Add hidden class if item hidden, before initialising Isotope: */
	var itemReveal = Isotope.Item.prototype.reveal;
	Isotope.Item.prototype.reveal = function () {
		itemReveal.apply(this, arguments);
		$(this.element).removeClass('isotope-hidden');
	};
	var itemHide = Isotope.Item.prototype.hide;
	Isotope.Item.prototype.hide = function () {
		itemHide.apply(this, arguments);
		$(this.element).addClass('isotope-hidden');
	};

	// Magnific Popup
	$('.portfolio-container').magnificPopup({
		delegate: '.portfolio-item:not(.isotope-hidden) a.link-preview', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// Testimonials carousel (uses the Owl Carousel library)
	$(".testimonials-carousel").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		items: 1,
		smartSpeed: 500,
		autoplayHoverPause: true
	});

})(jQuery);