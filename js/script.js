$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function(){
    $('.header__link').click(function(event){
      if ($('#burger').hasClass('active')) {
      $('body').removeClass('lock');
      $('.header__burger').removeClass('active');
      $('.header__menu').removeClass('active');
      }
    });
});

$(".owl-courses").owlCarousel({
  animateOut: "fadeOut",
  loop: true,
  autoplayHoverPause: false,
  autoplay: false,
  smartSpeed: 1000,
  dots: false,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    850: {
      items: 4,
    },
  },
});

