$(document).ready(function() {
  // header start

  $('.header__item_with_sublist, .header__switcher').click(function(e) {
    e.preventDefault();
    var list = $(this).find('.window');

    list.is(':visible') ? list.fadeOut() : list.fadeIn();
  });

  $(window).scroll(function() {
    var top = $(this).scrollTop();

    top > 0 ? $('header').addClass('header_fixed') : false;
    top === 0 ? $('header').removeClass('header_fixed') : false;
  });

  // header end


});