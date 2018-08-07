$(document).ready(function(){
  // header

  $('.header__item_with_sublist, .header__switcher').click(function(e) {
    e.preventDefault();

    var list = $(this).find('.window');
    
    list.is(':visible') ? list.fadeOut() : list.fadeIn();

  });

});