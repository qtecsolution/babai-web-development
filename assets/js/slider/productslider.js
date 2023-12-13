const galleryTop = new Swiper(".gallery-top", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  loop: true,
  speed: 750,
  spaceBetween: 40,
  pagination: false,
  navigation: false,
  parallax: true,
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,
});

const galleryThumbs = new Swiper(".gallery-thumbs", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  loop: true,
  speed: 750,
  spaceBetween: 16,
  slidesPerView: 5,
  pagination: false,
  navigation: false,
  parallax: true,
  grabCursor: true,
  slideToClickedSlide: true,
  watchSlidesVisibility: true,
});

galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
