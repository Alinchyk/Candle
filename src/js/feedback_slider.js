const swiperOne = new Swiper(".feedback__slider", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperTwo = new Swiper(".certificates__slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
  },
});
