"use strict";

svg4everybody({}); // Планировки

$('.plans__label').on('touchstart mouseover', handlePlan);

function handlePlan(evt) {
  evt.stopPropagation();
  var top = $(this).offset().top,
      left = $(this).offset().left,
      height = this.getBoundingClientRect().height;
  var $element = $('<span></span>', {
    class: "plans__label-box",
    text: $(this).attr('data-mess')
  });
  $('body').append($element);
  var width = $element.width() + 32;
  $element.css('top', top + 'px');
  $element.css('left', left + 'px');
  $element.css('height', height + 'px');
  $element.css('width', '36px');
  $element.on('touchend mouseout', function () {
    $element.css('width', '36px');
    setTimeout(function () {
      $element.remove();
    }, 200);
  });
  setTimeout(function () {
    $element.css('width', width + 'px');
  }, 0);
} // Липкий хэдер


$(window).scroll(function () {
  var bottomMain = $('.main').height() + $('.main').scrollTop();

  if ($(window).scrollTop() > bottomMain) {
    if (!$('.header').hasClass('header_opened')) {
      $('.header').addClass('header_animate');
      setTimeout(function () {
        $('.header').addClass('header_opened');
        $('.header').removeClass('header_animate');
      }, 0);
    }
  } else {
    if ($('.header').hasClass('header_opened')) {
      $('.header').addClass('header_animate');
      setTimeout(function () {
        $('.header').removeClass('header_opened');
        $('.header').removeClass('header_animate');
      }, 400);
    }
  }

  if ($(window).scrollTop() <= 70) {
    $('.header').removeClass('header_opened header_animate');
  }
}); // Анимация карты

animateMap();
setInterval(animateMap, 12000);

function animateMap() {
  $('.map__pin-img img:nth-child(2)').each(function (index, elem) {
    setTimeout(function () {
      $('.map__pin-img img:nth-child(2)').removeAttr('style');
      $(elem).css('opacity', '1');
    }, 3000 * index);
  });
}

$('.callback').click(function (e) {
  $('.smodal-callback [name=title]').val('Обратный звонок');
});
$('.plans__list-btn').click(function (e) {
  $('.smodal-callback [name=title]').val($(this).parent().find('.plans__list-title').html());
});
$('.plans__list-img').on('click', function (evt) {
  var title = $(this).attr('data-title'),
      img = $(this).attr('data-img'),
      area = $(this).attr('data-area');
  $('.smodal-plan__title').text(title);
  $('.smodal-plan__img').attr('src', img);
  $('.smodal-plan__area span').text(area);
  $('.smodal-plan [name=title]').val(title);
});
$('.footer__menu-nav-politics a, .section-error__nav .footer__menu-nav a, .gohome, .section-error-menu a, .gohome-menu a').click(function (e) {
  e.stopImmediatePropagation();
  location.href = '/' + $(this).attr("href");
});
$(window).ready(function () {
  var _href = location.hash;
  if (!_href || location.pathname === '/404.html' || location.pathname === '/politics.html') return;

  if ($(window).width() < 768) {
    $("html, body").scrollTop($(_href).offset().top - 47);
  } else {
    $("html, body").scrollTop($(_href).offset().top - 76);
  }
});
$('.open-menu').click(function (e) {
  e.preventDefault();

  if ($('body').width() >= 576) {
    $('.open-menu').toggleClass('open-menu_opened');
    $('.header-menu').toggleClass('header-menu_opened');
    $('.header').toggleClass('header_open');
  } else {
    $('body').addClass('o-hidden');
    $('.open-menu').removeClass('open-menu_opened');
    $('.mobile-menu').addClass('mobile-menu_opened');
    setTimeout(function () {
      $('.mobile-menu__inner').addClass('mobile-menu__inner_opened');
    }, 0);
  }
});
$('.mobile-menu__close').click(function (e) {
  e.preventDefault();
  $('body').removeClass('o-hidden');
  $('.mobile-menu__inner').addClass('mobile-menu__inner_closed');
  setTimeout(function () {
    $('.mobile-menu').removeClass('mobile-menu_opened');
    $('.mobile-menu__inner').removeClass('mobile-menu__inner_opened');
    $('.mobile-menu__inner').removeClass('mobile-menu__inner_closed');
  }, 500);
});
$('.mobile-menu').mouseup(function (e) {
  var target = $(e.target);

  if (target.hasClass('mobile-menu_opened')) {
    $('body').removeClass('o-hidden');
    $('.mobile-menu__inner').addClass('mobile-menu__inner_closed');
    setTimeout(function () {
      $('.mobile-menu').removeClass('mobile-menu_opened');
      $('.mobile-menu__inner').removeClass('mobile-menu__inner_opened');
      $('.mobile-menu__inner').removeClass('mobile-menu__inner_closed');
    }, 500);
  }
});
$(".menu__item a").click(function (e) {
  e.preventDefault();
  $('.menu__item').removeClass('menu__item_selected');
  $(this).parent().addClass('menu__item_selected');

  var _href = $(this).attr("href");

  if ($(window).width() < 768) {
    $('body').removeClass('o-hidden');
    $('.mobile-menu').removeClass('mobile-menu_opened');
    $('.mobile-menu__inner').removeClass('mobile-menu__inner_opened');
    $("html, body").animate({
      scrollTop: $(_href).offset().top - 47 + "px"
    });
  } else {
    $("html, body").animate({
      scrollTop: $(_href).offset().top - 76 + "px"
    });
  }
});
$(".header-menu__item a").click(function (e) {
  e.preventDefault();
  $('.header-menu__item').removeClass('header-menu__item_selected');
  $(this).parent().addClass('header-menu__item_selected');
  $('.header-menu').removeClass('header-menu_opened');
  $('.open-menu').removeClass('open-menu_opened');
  $('.header').removeClass('header_open');

  var _href = $(this).attr("href");

  if ($(window).width() < 768) {
    $("html, body").animate({
      scrollTop: $(_href).offset().top - 47 + "px"
    });
  } else {
    $("html, body").animate({
      scrollTop: $(_href).offset().top - 76 + "px"
    });
  }
});
$('.footer__menu-nav a, .main__more, .home-logo').click(function (e) {
  e.preventDefault();

  var _href = $(this).attr("href");

  if ($(window).width() < 768) {
    $("html, body").animate({
      scrollTop: $(_href).offset().top - 47 + "px"
    });
  } else {
    $("html, body").animate({
      scrollTop: $(_href).offset().top - 76 + "px"
    });
  }
}); // Sliders

$('.main__img-slider').slick({
  prevArrow: '.main__prev',
  nextArrow: '.main__next',
  asNavFor: '.main__info-slider, .main__dots, .main__caption'
});
$('.main__info-slider').slick({
  fade: true,
  arrows: false,
  asNavFor: '.main__img-slider'
});
$('.main__dots').slick({
  slidesToShow: 2,
  arrows: false,
  focusOnSelect: true,
  asNavFor: '.main__img-slider'
});
$('.main__caption').slick({
  slidesToShow: 1,
  arrows: false,
  asNavFor: '.main__img-slider'
});
$('.main__progress-bar').css('width', 1 / $('.main__img-slider').slick('getSlick').slideCount * 100 + '%');
$('.main__img-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  $('.main__progress-bar').css('width', (nextSlide + 1) / $('.main__img-slider').slick('getSlick').slideCount * 100 + '%');
});
$('.gallery__slider').slick({
  slidesToShow: 2,
  prevArrow: '.gallery__prev',
  nextArrow: '.gallery__next',
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
}); // Валидация

(function () {
  var $forms = $('.needs-validation');
  $forms.submit(function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).addClass('form_invalid');

    if ($(this)[0].checkValidity() === false) {} else {
      $(this).find('[type=submit]').prop('disabled', true);
      ajax($(this));
    }
  });
})();

$('.header__form-input').on('mouseover focus', function () {
  $(this).attr('placeholder', '+7 (___) ___-__-__');
  $(this).on('mouseout blur', function () {
    $(this).attr('placeholder', $(this).attr('data-placeholder') || '');
  });
});

function ajax(form) {
  $.ajax({
    type: "POST",
    url: "form.php",
    data: form.serialize()
  }).done(function () {
    $(".modal").modal("hide");
    setTimeout(function () {
      return $('#modal-application').modal('show');
    }, 100);

    if (form.attr('id') === 'form-callback') {
      yaCounter66156607.reachGoal('otpravka_zvonok');
      gtag('event', 'zvonok', {
        'event_category': 'otpravit_zvonok',
        'event_action': 'click'
      });
      gtag('event', 'page_view', {
        'page_path': '/otpavka-zvonok-form'
      });
    }

    if (form.attr('id') === 'form-price') {
      yaCounter66156607.reachGoal('otpravka_stoimost');
      gtag('event', 'zapros', {
        'event_category': 'otpravit_stoimost',
        'event_action': 'click'
      });
      gtag('event', 'page_view', {
        'page_path': '/otpavka-stoimost-form'
      });
    }

    if (form.attr('id') === 'form-consultation') {
      yaCounter66156607.reachGoal('otpravka_voprosy');
      gtag('event', 'voprosy', {
        'event_category': 'otpravform_voprosy',
        'event_action': 'click'
      });
      gtag('event', 'page_view', {
        'page_path': '/otpavka-voprosy-form'
      });
    }

    form.trigger("reset");
  }).fail(function (jqXHR, textStatus) {
    console.error(textStatus);
  }).always(function () {
    setTimeout(function () {
      form.find('[type=submit]').prop('disabled', false);
    }, 600);
  });
} // Трансформация преимуществ


initAdvantages();
$(window).resize(initAdvantages);

function initAdvantages() {
  if ($(document).width() < 768) {
    $('.advantages__content .tab-pane').removeClass('fade');
    $('.advantages__content .tab-pane').removeAttr('role');
    $('.advantages__collapse').addClass('collapsed');
    $('.advantages__collapse-content').addClass('advantages__collapse-content_sm collapse');
  } else {
    $('.advantages__content .tab-pane').addClass('fade');
    $('.advantages__content .tab-pane').attr('role', 'tabpanel');
    $('.advantages__collapse').removeClass('collapsed');
    $('.advantages__collapse-content').removeClass('advantages__collapse-content_sm collapse');
  }
}