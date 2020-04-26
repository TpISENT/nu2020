jQuery(document).ready(function ($) {
  

  $.fn.mt_init = function () {
    let target = $('.nu-mobile-menu-widget nu-input');
    $.fn.mt_setDirtyness(target);
    $.fn.mt_toggle();
  };

  $.fn.mt_setDirtyness = function (target) {
    if (target.value && target.value.length > 0) {
      $('.nu-mobile-menu-widget').addClass('nu-input-dirty');
    } else {
      $('.nu-mobile-menu-widget').removeClass('nu-input-dirty');
    }
  }

  $.fn.mt_toggle = function () {
    if ($(window).scrollTop() != 0) {
      $('.nu-mobile-menu-widget').addClass('show');
    } else {
      $('.nu-mobile-menu-widget').removeClass('show');
    }
  }

  $.fn.mt_init();

  $('.nu-mobile-menu-widget .nu-menu-button').on('click',
    function () {
      $('.nu-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').addClass('nu-noscroll');
      $('.nu-mobile-menu-overlay .sf-accordion').addClass('sf-expanded').removeClass('sf-hidden');
    });

  $('.nu-mobile-menu-overlay').on('dblclick',
    function () {
      $('.nu-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').removeClass('nu-noscroll');
    });

  $('.nu-mobile-menu-widget .nu-input').keyup(function (event) {
    
    $.fn.mt_setDirtyness(event.target);
  });

  $('.nu-mobile-menu-widget .nu-clear-icon').on('click',
    function () {
      $('.nu-mobile-menu-widget .nu-input').val('').keyup();
    });

  $('.nu-mobile-menu-overlay .nu-dismiss-button.nu-button').on('click',
    function () {
      $('.nu-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').removeClass('nu-noscroll');
    });

  $(window).scroll(function () {
    $.fn.mt_toggle();
  });
}); 