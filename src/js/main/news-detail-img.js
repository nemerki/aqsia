$(document).ready(function() {
  
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




});

