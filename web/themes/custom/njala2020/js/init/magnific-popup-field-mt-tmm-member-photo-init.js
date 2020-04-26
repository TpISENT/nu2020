(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtMagnificPopupMemberPhoto = {
    attach: function (context, settings) {
      $(context).find('.field--name-field-nu-tmm-member-photo a.image-popup').once('nuMagnificPopupMemberPhotoInit').magnificPopup({
        type:"image",
        removalDelay: 300,
        mainClass: "mfp-fade",
        gallery: {
          enabled: true, // set to true to enable gallery
        },
        image: {
          titleSrc: function(item) {
            return item.el.closest('.overlay-container').children()[1].title || '';
          }
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
