$(document).ready(function() {

	$('.olke-daxilindeic-img__carusel').owlCarousel({
		loop:true,
		nav:true,
		items:1,
		dots:false,
		autoplay:true
	})


	$('.uzvluk-qaydalari__carusel').owlCarousel({
		loop:true,
		items:1,
		autoplay:true
	})

	$('.secilmis-mehsullar__carusel').owlCarousel({
		loop:true,
		items:4,
		autoplay:true,
		margin: 24,
		dots: false,

		responsive:{
			0:{
				items:1,
				nav:false
			},

			578:{
				items:2,
				nav:false
			},
			768:{
				items:3,
				loop:false
			},
			992:{
				items:4,
				loop:false
			}
		}
	})

	$('.index-slide__left-carusel').owlCarousel({
		loop:true,
		items:1,
		autoplay:true
	})

	$('.index-slide__right-carusel').owlCarousel({
		loop:true,
		items:1,
		nav:true,
		autoplay:true

	})
	
});