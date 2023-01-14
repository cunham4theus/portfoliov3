
//carousel
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
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

//transitions
TweenMax.from('.techs__container--text', 1, {
  delay: 5,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});
TweenMax.from('.nav__logo', 1, {
  delay: 5,
  opacity: 0,
  y: -100,
  ease: Expo.easeInOut,
});
TweenMax.staggerFrom(
  '.nav__links li',
  1,
  {
    delay: 4.6,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut,
  },
  0.08,
);
TweenMax.to('.nav', 2, {
  delay: 3.2,
  height: '100vh',
  opacity: 1,
  ease: Expo.easeInOut,
});
TweenMax.from('.swiper', 1, {
  delay: 5,
  opacity: 0,
  x: 800,
  ease: Expo.easeInOut,
});
TweenMax.staggerFrom('.swiper-slide ul li', 1,   
  {
    delay: 4.6,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut,
  },
  0.08
);
TweenMax.staggerFrom(
  '.media ul li',
  1,
  {
    delay: 5,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut,
  },
  0.08,
);
TweenMax.from('.footer', 1, {
  delay: 5,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});