$(function() {
  $( "#datepicker" ).datepicker({ firstDay: 1, minDate: 0 });
});

// minDate = unselected days before current day
// delete ", minDate: 0" for all days
$(document).ready(function() {
	
});
  // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 15,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.414639, 49.858496), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [	{		"featureType":"landscape",		"stylers":[			{				"hue":"#FFBB00"			},			{				"saturation":43.400000000000006			},			{				"lightness":37.599999999999994			},			{				"gamma":1			}		]	},	{		"featureType":"road.highway",		"stylers":[			{				"hue":"#FFC200"			},			{				"saturation":-61.8			},			{				"lightness":45.599999999999994			},			{				"gamma":1			}		]	},	{		"featureType":"road.arterial",		"stylers":[			{				"hue":"#FF0300"			},			{				"saturation":-100			},			{				"lightness":51.19999999999999			},			{				"gamma":1			}		]	},	{		"featureType":"road.local",		"stylers":[			{				"hue":"#FF0300"			},			{				"saturation":-100			},			{				"lightness":52			},			{				"gamma":1			}		]	},	{		"featureType":"water",		"stylers":[			{				"hue":"#0078FF"			},			{				"saturation":-13.200000000000003			},			{				"lightness":2.4000000000000057			},			{				"gamma":1			}		]	},	{		"featureType":"poi",		"stylers":[			{				"hue":"#00FF6A"			},			{				"saturation":-1.0989010989011234			},			{				"lightness":11.200000000000017			},			{				"gamma":1			}		]	}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.414639, 49.858496),
                    map: map,
                    title: 'Snazzy!'
                });
            }
//  $('.slider-single').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   fade: false,
//   adaptiveHeight: true,
//   infinite: false,
//   useTransform: true,
//   speed: 400,
//   cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
// });

//  $('.slider-nav')
//  .on('init', function(event, slick) {
//   $('.slider-nav .slick-slide.slick-current').addClass('is-active');
// })
//  .slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   dots: false,
//   focusOnSelect: false,
//   infinite: false,
//   responsive: [{
//     breakpoint: 1024,
//     settings: {
//       slidesToShow: 5,
//       slidesToScroll: 5,
//     }
//   }, {
//     breakpoint: 640,
//     settings: {
//       slidesToShow: 4,
//       slidesToScroll: 4,
//     }
//   }, {
//     breakpoint: 420,
//     settings: {
//       slidesToShow: 3,
//       slidesToScroll: 3,
//     }
//   }]
// });

//  $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
//   $('.slider-nav').slick('slickGoTo', currentSlide);
//   var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
//   $('.slider-nav .slick-slide.is-active').removeClass('is-active');
//   $(currrentNavSlideElem).addClass('is-active');
// });

//  $('.slider-nav').on('click', '.slick-slide', function(event) {
//   event.preventDefault();
//   var goToSingleSlide = $(this).data('slick-index');

//   $('.slider-single').slick('slickGoTo', goToSingleSlide);
// });


$('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'

});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-single',
  // centerMode: true,
  focusOnSelect: true,
   responsive: [
     {
    breakpoint: 1360,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    }
  },{
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    }
  }]
  // prevArrow: '<button type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  // nextArrow:'<button type="button" ><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
});






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
	autoplay:true
})
$(document).ready(function() {
    $(".uzvluk-anketi__send").click(function() {
      swal("Sorğunuz uğurla göndərildi!", "Müraciətiniz üçün təşəkkür edirik!", "success", {
          buttons: false,
          timer: 1500,
      })
  });
})
