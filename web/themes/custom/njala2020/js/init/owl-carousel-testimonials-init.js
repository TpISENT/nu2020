(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtowlCarouselTestimonials = {
    attach: function (context, settings) {
      $(context).find('.nu-carousel-testimonials').once('nuowlCarouselTestimonialsInit').each(function() {
        $(this).owlCarousel({
          items: 1,
          autoplay: drupalSettings.njala2020.owlCarouselTestimonialsInit.owlTestimonialsAutoPlay,
          autoplayTimeout: drupalSettings.njala2020.owlCarouselTestimonialsInit.owlTestimonialsEffectTime,
          nav: true,
          dots: false,
          loop: false,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
