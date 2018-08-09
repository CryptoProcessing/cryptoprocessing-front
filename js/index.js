$(document).ready(function() {
  // header start

  $('.header__item_with_sublist, .header__switcher').click(function(e) {
    e.preventDefault();
    var list = $(this).find('.window');

    list.is(':visible') ? list.fadeOut() : list.fadeIn();
  });

  $(window).scrollTop() > 0 ? $('header').addClass('header_fixed') : false;

  $(window).scroll(function() {
    var top = $(this).scrollTop();

    top > 0 ? $('header').addClass('header_fixed') : false;
    top === 0 ? $('header').removeClass('header_fixed') : false;
  });

  $(document).click(function(e) {
    var target = $(e.target);

    if(!target.closest('.header__item_with_sublist, .switcher').length) {
      $('.window').fadeOut();
    }

    if(!target.closest('.form__line').length) {
      $('.form__line').removeClass('form__line_selected');
    }
  });

  // header end

  // team start

  $('.team__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    draggable: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.team__arrow_left').click(function() {
    $('.team__slider').slick('slickPrev');
  });

  $('.team__arrow_right').click(function() {
    $('.team__slider').slick('slickNext');
  });

  // team end

  // contact page

  $('.form__field, .form__select-cont, .form__area').click(function() {
    var parent = $(this).parent('.form__line');

    $('.form__line').removeClass('form__line_selected');
    parent.addClass('form__line_selected');

  });

  $('.form').submit(function(e) {
    e.preventDefault();
    console.log($(this).serialize());
  });

  // contact end

});