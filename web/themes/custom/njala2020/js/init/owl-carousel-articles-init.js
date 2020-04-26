(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtOwlCarouselArticles = {
    attach: function (context, settings) {
      $(context).find('.nu-carousel-articles').once('nuOwlCarouselArticlesInit').each(function() {
        $(this).owlCarousel({
          items: 2,
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
              items:2,
            },
            1680:{
              items:2,
            }
          },
          autoplay: drupalSettings.njala2020.owlCarouselArticlesInit.owlArticlesAutoPlay,
          autoplayTimeout: drupalSettings.njala2020.owlCarouselArticlesInit.owlArticlesEffectTime,
          nav: false,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
