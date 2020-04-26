(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtowlCarouselAlbums = {
    attach: function (context, settings) {
      $(context).find('.nu-carousel-albums').once('nuowlCarouselAlbumsInit').each(function() {
        $(this).owlCarousel({
          items: 1,
          responsive:{
            0:{
              items:1,
            },
            480:{
              items:1,
            },
            768:{
              items:2,
            },
            992:{
              items:2,
            },
            1200:{
              items:4,
            },
            1680:{
              items:4,
            }
          },
          autoplay: drupalSettings.njala2020.owlCarouselAlbumsInit.owlAlbumsAutoPlay,
          autoplayTimeout: drupalSettings.njala2020.owlCarouselAlbumsInit.owlAlbumsEffectTime,
          nav: true,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
