const swiperOne = new Swiper(".feedback__slider", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperTwo = new Swiper(".certificates__slider", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: { spaceBetween: 10, slidesPerView: 3 },
    480: { spaceBetween: 10, slidesPerView: 2 },
    360: { slidesPerView: 1 },
  },
});
