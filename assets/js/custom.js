document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    //  console.log(window.scrollY,window.scrollX)
    if (window.scrollY > 50) {
      document.querySelector(".menuBg").classList.add("fixedTop");
      // add padding top to show content behind navbar
      // navbar_height = document.querySelector('.navbar').offsetHeight;
      // document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.querySelector(".menuBg").classList.remove("fixedTop");
      // remove padding top from body
      // document.body.style.paddingTop = '0';
    }
  });
});

$(document).ready(function () {
//   $(".navbar-light .dmenu").hover(
//     function () {
//       $(this).find(".sm-menu").first().stop(true, true).fadeIn(150);
//     },
//     function () {
//       $(this).find(".sm-menu").first().stop(true, true).fadeOut(105);
//     }
//   );
$('.plusMin').click(function(e) {
  e.preventDefault()
  $(this).toggleClass('minHid')
})
var swiper = new Swiper(".homeBanner", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".swiperNewsFullBn", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper25 = new Swiper(".swiper-twoHome", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 4,
  // Responsive breakpoints
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiper5 = new Swiper(".swip5Items", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
 
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,

    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,

    },
    1300: {
      slidesPerView: 5,

    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let swiperEvent = new Swiper(".swiperEvents", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".swiper-twoHome").hover(function() {
  (this).swiper.autoplay.stop();
}, function() {
  (this).swiper.autoplay.start();
});

$("a.fancyboxVideo").fancybox({
  // openEffect	: 'none',
  // closeEffect	: 'none'
  type: "iframe",
  width: "90%",
  height: "90%",
  youtube: {
    autoplay: 1, // enable autoplay

  },
});


var swiper = new Swiper(".SwiperThum", {
  loop: false,
  spaceBetween: 0,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2555 = new Swiper(".SwiperGallery", {
  loop: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});











/** ---------------------- end read Fun -------------------- **/
});
