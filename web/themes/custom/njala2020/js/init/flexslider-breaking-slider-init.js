(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtflexsliderBreakingSlider = {
    attach: function (context, settings) {
      $(context).find('.view-nu-breaking-slider .flexslider').once('nuflexsliderBreakingSliderInit').each(function() {
        $(this).flexslider({
          animation: drupalSettings.njala2020.flexsliderBreakingSliderInit.breakingEffect,        // Select your animation type, "fade" or "slide"
          slideshowSpeed: drupalSettings.njala2020.flexsliderBreakingSliderInit.breakingEffectTime,   // Set the speed of the slideshow cycling, in milliseconds
          prevText: "",
          nextText: "",
          pauseOnAction: true,
          useCSS: false,
          controlNav: false,
          pausePlay: true,
          directionNav: true
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
