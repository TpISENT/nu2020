(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtMagnificPopupCrsMediaCombo = {
    attach: function (context, settings) {
      $(context).find('.nu-course-media-area .iframe-popup > a, .nu-course-media-area a.image-popup').once('nuMagnificPopupCrsMediaComboInit').magnificPopup({
        disableOn: 700,
        type: "image",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {
          enabled: true, // set to true to enable gallery
        },
        callbacks: {
          elementParse: function(item) {
             // the class name
             if(item.el[0].classList.contains('image-popup')) {
               item.type = 'image';
             } else {
               item.type = 'iframe';
             }
          }
        },
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
