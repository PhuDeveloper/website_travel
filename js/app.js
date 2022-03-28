$(document).ready(function () {
  $("#owl-example1").owlCarousel({
    items: 3,
    pagination: true,

    autoPlay: true,
    responsive: true,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 3],
    itemsTablet: [768, 2],
    itemsMobile: [479, 1],
  });
  $("#owl-example2").owlCarousel({
    items: 1,
    pagination: false,
    responsive: true,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsMobile: [479, 1],
  });
  $(window).scroll(function () {
    var scrTop = window.scrollY;
    if (scrTop > 0) {
      $(".bottomHeader").addClass("addHeader");
    } else if (scrTop === 0) {
      $(".bottomHeader").removeClass("addHeader");
    }
  });
  $('.bar').click(function(){
    $('.scroll').css({
      

    })
  })
});
