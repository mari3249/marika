const galleryThumbs = new Swiper ('.tab-menu', {
  spaceBetween: 20,
  slidesPerView: 'auto',
  freeMode: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slideActiveClass: 'swiper-slide-active',
});

galleryThumbs.on ('tap', function () {
  const current = galleryTop.activeIndex;
  galleryThumbs.slideTo (current, 500, true);
});

const galleryTop = new Swiper ('.tab-contents', {
  loop: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    /*type: 'fraction',*/
    clickable: true,
  },

  thumbs: {
    swiper: galleryThumbs,
  },

  breakpoints: {
    // 500px以上の場合
    500: {
      slidesPerView: 'auto',
    },
  },
});