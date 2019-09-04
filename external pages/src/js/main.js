$(window).on("load",function() {
    setTimeout(function() {
      $('.page-loader').fadeOut('slow', function() {});
    }, 500);
});
$(document).ready(function() {
      $('.js-scroll-bar').scrollbar();
      $('.js-scroll-bar').focus('');
      if ($('.js-hamburger').length) {
        $('.js-hamburger').click(function(){
          var nav = $('.header-nav-mobile')

          $(this).toggleClass('is-active');
          nav.toggleClass('header-nav-mobile--open');
          $('body').toggleClass('body-menu-open');
      }); 
    };
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
          $('.js-scroll').fadeIn();
      } else {
          $('.js-scroll').fadeOut();
      }
    });
    $('.js-toogle-more').click(function(e){
          e.preventDefault();
          var sibl = $(this).siblings('.chairity-txt');
          var sibl_child = sibl.children('.chairity-more');
          $(this).text(sibl_child.is(':visible') ? 'Подробнее' : 'Скрыть');
          sibl_child.slideToggle('slow');
    })
    $('.js-scroll').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    $(".js-scroll-bar").on('focus  blur', function(){
         $(this).closest('.scroll-wrapper').toggleClass('is_focused');
    })
    function qtySelectors() {
      $('.js-qty__adjust').on('click', function (e) {
        e.preventDefault();
        var $el = $(this),
          $qtySelector = $el.closest('.count').find('.js-qty__num'),
          qty = parseInt($qtySelector.val());
        if ($el.hasClass('js-qty__adjust--plus')) {
          qty += 1;
        } else {
          qty -= 1;
          if (qty <= 0) qty = 0;
        }
        $qtySelector.val(qty);
        console.log(qty)
      });
    };
    qtySelectors();
});