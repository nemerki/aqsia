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

(function ($) {

    /*[ Load page ]
    ===========================================================*/

    
    /*[ Back to top ]
    ===========================================================*/


    /*[ Show header dropdown ]
    ===========================================================*/
    $('.js-show-header-dropdown').on('click', function(){
        $(this).parent().find('.header-dropdown')
    });

    var menu = $('.js-show-header-dropdown');
    var sub_menu_is_showed = -1;

    for(var i=0; i<menu.length; i++){
        $(menu[i]).on('click', function(){ 

            if(jQuery.inArray( this, menu ) == sub_menu_is_showed){
                $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                sub_menu_is_showed = -1;
            }
            else {
                for (var i = 0; i < menu.length; i++) {
                    $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
                }

                $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                sub_menu_is_showed = jQuery.inArray( this, menu );
            }
        });
    }

    $(".js-show-header-dropdown, .header-dropdown").click(function(event){
        event.stopPropagation();
    });

    $(window).on("click", function(){
        for (var i = 0; i < menu.length; i++) {
            $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
        }
        sub_menu_is_showed = -1;
    });


     /*[ Fixed Header ]
     ===========================================================*/
     var posWrapHeader = $('.topbar').height();
     var posWrapHeader2 = $('.logoCenter').height();
     var toplam = posWrapHeader + posWrapHeader2;
     var header = $('.container-menu-header');

     $(window).on('scroll',function(){

        if($(this).scrollTop() >= toplam) {
            $('.header1').addClass('fixed-header');
            $(header).css('top',-toplam); 

        }  
        else {
            var x = - $(this).scrollTop(); 
            $(header).css('top',x); 
            $('.header1').removeClass('fixed-header');
        } 

        if($(this).scrollTop() >= 200 && $(window).width() > 992) {
            $('.fixed-header2').addClass('show-fixed-header2');
            $('.header2').css('visibility','hidden'); 
            $('.header2').find('.header-dropdown').removeClass("show-header-dropdown");
            
        }  
        else {
            $('.fixed-header2').removeClass('show-fixed-header2');
            $('.header2').css('visibility','visible'); 
            $('.fixed-header2').find('.header-dropdown').removeClass("show-header-dropdown");
        } 

    });

    /*[ Show menu mobile ]
    ===========================================================*/
    $('.btn-show-menu-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $('.wrap-side-menu').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu');

    for(var i=0; i<arrowMainMenu.length; i++){
        $(arrowMainMenu[i]).on('click', function(){
            $(this).parent().find('.sub-menu').slideToggle();
            $(this).toggleClass('turn-arrow');
        })
    }

    $(window).resize(function(){
        if($(window).width() >= 992){
            if($('.wrap-side-menu').css('display') == 'block'){
                $('.wrap-side-menu').css('display','none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }
            if($('.sub-menu').css('display') == 'block'){
                $('.sub-menu').css('display','none');
                $('.arrow-main-menu').removeClass('turn-arrow');
            }
        }
    });


    /*[ remove top noti ]
    ===========================================================*/
    $('.btn-romove-top-noti').on('click', function(){
        $(this).parent().remove();
    })


    /*[ Block2 button wishlist ]
    ===========================================================*/
    $('.block2-btn-addwishlist').on('click', function(e){
        e.preventDefault();
        $(this).addClass('block2-btn-towishlist');
        $(this).removeClass('block2-btn-addwishlist');
        $(this).off('click');
    });

    /*[ +/- num product ]
    ===========================================================*/
    $('.btn-num-product-down').on('click', function(e){
        e.preventDefault();
        var numProduct = Number($(this).next().val());
        if(numProduct > 1) $(this).next().val(numProduct - 1);
    });

    $('.btn-num-product-up').on('click', function(e){
        e.preventDefault();
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });


    /*[ Show content Product detail ]
    ===========================================================*/
    $('.active-dropdown-content .js-toggle-dropdown-content').toggleClass('show-dropdown-content');
    $('.active-dropdown-content .dropdown-content').slideToggle('fast');

    $('.js-toggle-dropdown-content').on('click', function(){
        $(this).toggleClass('show-dropdown-content');
        $(this).parent().find('.dropdown-content').slideToggle('fast');
    });


    

})(jQuery);
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
$(document).ready(function() {
    $(".uzvluk-anketi__send").click(function() {
      swal("Sorğunuz uğurla göndərildi!", "Müraciətiniz üçün təşəkkür edirik!", "success", {
          buttons: false,
          timer: 1500,
      })
  });
})
