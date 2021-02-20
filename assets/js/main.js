(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    var $team = $(".teams");

    $team.owlCarousel({
      stagePadding: 150,
      loop: true,
      margin: 20,
      dots: false,
      nav: false,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 50,
        },
        600: {
          items: 2,
          stagePadding: 100,
        },
        1000: {
          items: 4,
        },
      },
    });

    var $owl = $(".testimonial-slider");

    $owl.owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      nav: true,
      autoplay: true,
      navText: [
        '<img src="assets/img/prev-slide.svg" alt="">',
        '<img src="assets/img/next-slide.svg">',
      ],
      dotsContainer: "#carousel-custom-dots",
      items: 1,
    });

    $(".owl-dot").click(function () {
      owl.trigger("to.owl.carousel", [$(this).index(), 300]);
    });
  });
})(jQuery);
