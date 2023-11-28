const boyTrendingSlider = new Swiper(".boyTrendingSlider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  loop: true,
  speed: 750,
  slidesPerView: 1,
  parallax: true,
  spaceBetween: 16,
  pagination: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const girlTrendingSlider = new Swiper(".girlTrendingSlider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  loop: true,
  speed: 750,
  parallax: true,
  spaceBetween: 16,
  pagination: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
});

const toddlerTrendingSlider = new Swiper(".toddlerTrendingSlider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  loop: true,
  slidesPerView: 1,
  speed: 750,
  parallax: true,
  spaceBetween: 16,
  pagination: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
