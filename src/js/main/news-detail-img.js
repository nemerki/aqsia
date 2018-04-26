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





