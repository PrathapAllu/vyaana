// body preloader
$(window).on('load', function () {
  $('.page-loader').fadeOut('slow');
});

// On Scroll Header fixed to top
$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $('header').addClass('fixed-top');
  }
  else {
    $('header').removeClass('fixed-top');
  }
});

// On hover open dropdown menu & clickable parent link

jQuery(function ($) {
  if ($(window).width() > 320) {
    $('.navbar .dropdown').hover(function () {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(20).slideDown();

    }, function () {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(20).slideUp();

    });

    $('.navbar .dropdown > a').click(function () {
      location.href = this.href;
    });

  }
});

//menu toggel
$('.menu-toggle').on('click', function () {
  $('.btn-wrapper').toggleClass('menu--is-revealed');
});

// menu link click close collapse
$('.navbar-collapse a').click(function () {
  $(".navbar-collapse").collapse('hide');
  $(".btn-wrapper").toggleClass('menu--is-revealed');
});
// On Scroll back to top
$(window).on('scroll', function () {

  // Back Top Button
  if ($(window).scrollTop() > 500) {
    $('.scrollup').addClass('back-top');
  } else {
    $('.scrollup').removeClass('back-top');
  }
});
// On Click Section Switch
// used for back-top
$('[data-type="section-switch"]').on('click', function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var target = $(this.hash);
    if (target.length > 0) {

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

//Zodic slider
$('#carouselZodic').owlCarousel({
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  nav: false,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 6
    }
  }
});

//testimonial slider
$('#carouselTestimonials').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  items: 3,
  center: true,
  navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

//services feature slider
$('#carouselService').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  items: 3,
  center: true,
  navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})

//counter function
var a = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 8000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
});

// video frame open popup
//========= glightbox
const lightbox = GLightbox({
  'href': 'https://www.youtube.com/watch?v=Ph3HCXtuCQw',
  'type': 'video',
  'source': 'youtube', //vimeo, youtube or local
  'width': 900,
  'autoplayVideos': true,
});

// AOS
$(document).ready(function () {
  AOS.init({
    duration: 800,
    offset: 520,
  });
});