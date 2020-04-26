(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtflexsliderInPage = {
    attach: function (context, settings) {

      // store the slider in a local variable
      var $window = $(window),
      flexslider;

      $(context).find('.in-page-images-slider').once('nuflexsliderInPageSliderInit').each(function() {
        $(this).flexslider({
          animation: drupalSettings.njala2020.flexsliderInPageInit.inPageSliderEffect,
          controlNav: true,
          directionNav: false,
          slideshow: true,
        });

        $(this).fadeIn("slow");

      });

    }
  };
})(jQuery, Drupal, drupalSettings);