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
  $(".plusMin").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("minHid");
  });
  var swiper = new Swiper(".homeBanner", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".swiperNewsFullBn", {
    pagination: {
      el: ".swiper-pagination",
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
        spaceBetween: 10,
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".swiper-pagination",
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
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let swiper4 = new Swiper(".swip4Items", {
    slidesPerView: 4,
    spaceBetween: 22,
    loop: false,
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
        spaceBetween: 10,
      },
      // when window width is >= 640px
      1000: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1300: {
        slidesPerView: 4,
      },
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
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let partnersSlider = new Swiper(".partnersSlider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
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
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let resultEdu = new Swiper(".resultEdu", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
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
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let swipNewsBanner = new Swiper(".swipNewsBanner", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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
  $("a.fancyboxImg").fancybox({
    // openEffect	: 'none',
    // closeEffect	: 'none'
});
  var swiper = new Swiper(".SwiperThum", {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2555 = new Swiper(".SwiperGallery", {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  // start paly video
  $(".videoPlay").click(function (e) {
    e.preventDefault();
    $(this)
      .addClass("playVideo")
      .next()
      .trigger("play")
      .on("ended", function () {
        $(this).prev().removeClass("playVideo");
      });
  });
  $(".videoPlayBox").click(function (e) {
    e.preventDefault();
    $(this).addClass("PLsmBox").next().trigger("play").attr("controls", "");
  });

  var mySwiperThumb = new Swiper(".swiper-twoHome2", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var mySwiper2 = new Swiper(".homeBanner2", {
    loop: false,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: mySwiperThumb,
    },
  });

  let counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

  let $counters = $(".counter");

  /* Start counting, do this on DOM ready or with Waypoints. */
  $counters.each(function (ignore, counter) {
    let waypoint = new Waypoint({
      element: $(this),
      handler: function () {
        counterUp(counter, {
          duration: 2000,
          delay: 10,
        });
        // this.destroy();
      },
      offset: "bottom-in-view",
    });
  });

  var swiperTrainingThumb = new Swiper(".swiperTrainingThumb", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".swiperTraining", {
    loop: false,
    spaceBetween: 10,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    thumbs: {
      swiper: swiperTrainingThumb,
    },
  });
  // $(".swiper-twoHome,.swiperTraining").hover
  $(".swiper-twoHome").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
  $(".scrolingUp").on('click', function() {
    $('html, body').animate({
      scrollTop: $('html, body').offset().top,
    });
  });
  // AOS.init({
  //   duration: 1000,
  // });

  /** ---------------------- end read Fun -------------------- **/
});

$(window).on('load',function(){
    $(".loader-container").fadeOut();
});

// color func
$(".change-colors").on("click", function (e) {
  $("body").toggleClass("contrast");

  e.stopPropagation();
 
});



  /* --- Font sizing Function --- */
  $('#increaseFont').click(function(){
    modifyFontSize('html','increase');
  });
  $('#decreaseFont').click(function(){
    modifyFontSize('html','decrease')
  });


  function modifyFontSize(MyElement,flag){

    var HtmlElement = $(MyElement);
    var currentFontSize = parseInt (HtmlElement.css('font-size'));
    
    if (flag =='increase' & currentFontSize < 13 )
        currentFontSize += 1;
    else if (flag == 'decrease' & currentFontSize >= 11 )
        currentFontSize -= 1;
    else if (flag == 'reset')
    currentFontSize = 10;

    HtmlElement.css('font-size', currentFontSize);

    // console.log(currentFontSize);

  }
