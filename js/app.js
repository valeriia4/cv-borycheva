"use strict";

;

(function ($) {
  "use strict";

  $('.portfolio-surfer__slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false
  });
  $('.portfolio-surfer__slidernext').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false
  });
  $('.portfolio-surfer__slidermonti').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false
  }); //scroll

  $(document).ready(function () {
    $("#main-nav").on("click", "a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault(); //забираем идентификатор бока с атрибута href

      var id = $(this).attr('href'),
          //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top; //анимируем переход на расстояние - top за 1500 мс

      $('body,html').animate({
        scrollTop: top
      }, 1500);
    });
  });
  $(document).ready(function ($) {
    var nav = $('.nav-container');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 470) {
        nav.addClass("f-nav");
        $(".ba-header__img").css("display", "none");
      } else {
        nav.removeClass("f-nav");
        $(".ba-header__img").css("display", "block");
      }
    });
  });
  $('.slider-logo').slick({
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    }]
  });
})(jQuery);