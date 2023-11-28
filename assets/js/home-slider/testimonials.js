const testimonialSlider = new Swiper(".testimonialSlider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  loop: true,
  speed: 750,
  slidesPerView: 1,
  parallax: true,
  spaceBetween: 0,
  pagination: false,
  navigation: false,
});
