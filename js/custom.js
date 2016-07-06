(function(){
	wow = new WOW({
		mobile: false
	});
	wow.init();

	$("#owl-slider").owlCarousel({
		items : 1,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		slideSpeed : 300,
		paginationSpeed : 400,
		autoPlay: 5000,
		singleItem: true
	});

	$("#owl-clients").owlCarousel({
		items : 5,
		pagination: false,
		slideSpeed : 300,
		paginationSpeed : 400,
		autoPlay: 5000
	});

	  $('#works-list').mixitup({
	    effects: ['fade','scale'],
	    easing: 'snap'
	  });

	  $(".rotate").textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});

//	  $('.section-title').stellar();




})();

(function(){
	$('#show').on('click', function () {
		$('.items').toggleClass('showMe');
	})
})()


tl = new TimelineLite();
tl
.to($('.logo'), .5 ,{ scale:.5, x: -900, y: -200,'z-index': 999/*onComplete: functionname*/ })

tl.timeScale(.4);
