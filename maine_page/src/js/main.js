  $(window).on("load",function() {
    setTimeout(function() {
      $('body').removeClass('body-overflow')
      $('.page-loader').fadeOut('slow', function() {
      });
    }, 1000);
  });

// wait for document ready
$(document).ready(function(){
    var windowWidth = $(this).width();
    // scroll to top
    if($('.js-scroll').length) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.js-scroll').fadeIn();
        } else {
            $('.js-scroll').fadeOut();
          }
        });

      $('.js-scroll').click(function () {
        $('body,html').animate({
            scrollTop: 0
          }, 400);
          return false;
        });
    }
    //init wow
    function wow() {
      new WOW().init();
    };
    // change width 
    function projWidth() {
      if($('.project-item-wrap').length){
          $('.project-item-wrap').each(function() {
               var el_height = $(this).height()           
              $(this).parent('div').css('width', el_height + 30);
          })
        }
    }; 

    if($(window).resize()) {
      $(function() {
        if(screen.width > 991) {
          projWidth();
          wow();
        }
      });
    }

    if(screen.width > 991) {
      projWidth();
      wow();
    };

  if($('.js-slider').length) {
    $('.js-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      });
    };

    if($('.js-scroll').length) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.js-scroll').fadeIn();
        } else {
            $('.js-scroll').fadeOut();
          }
        });

        $('.js-scroll').click(function () {
          $('body,html').animate({
              scrollTop: 0
            }, 400);
            return false;
          });
      }
      //toggle menu
      if ($('.js-hamburger').length) {
        $('.js-hamburger').click(function(){
          var nav = $('.header-nav-mobile')

          $(this).toggleClass('is-active');
          nav.toggleClass('header-nav-mobile--open');
          $('body').toggleClass('body-menu-open');
      }); 
    };
    //scrol to 
    if($('.nav-mobile-list').length) {
        $(".nav-mobile-list").on("click","a", function () {
            var id  = $(this).attr('href'),
                top = $(id).offset().top;

          $('.js-hamburger').trigger('click');
          setTimeout(function(){
              $('body,html').animate({scrollTop: top}, 1500);
          },500);
        })
    }
    //scroll to when open menu
    $(".header-nav-list").on("click","a", function () {
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});
