TweenMax.from('.about__container--text h1', 1, {
  delay: 3,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});
TweenMax.from(
  '.about__container-description',
  1,
  {
    delay: 3.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut,
  },
  0.08,
);
TweenMax.to('.nav', 2, {
  delay: 2.2,
  height: '100vh',
  opacity: 1,
  ease: Expo.easeInOut,
});
TweenMax.from('.about__container-img', 1, {
  delay: 3,
  opacity: 0,
  x: -200,
  ease: Expo.easeInOut,
});
TweenMax.from('.about__container-description--btn', 1, {
  delay: 3,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});
TweenMax.from('.nav__logo', 1, {
  delay: 3,
  opacity: 0,
  y: -100,
  ease: Expo.easeInOut,
});
TweenMax.staggerFrom(
  '.nav__links li',
  1,
  {
    delay: 3.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut,
  },
  0.08,
);
TweenMax.staggerFrom(
  '.media ul li',
  1,
  {
    delay: 3,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut,
  },
  0.08,
);
TweenMax.from('.footer', 1, {
  delay: 4,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});

// bug height fixed
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};
window.addEventListener('resize', documentHeight);
documentHeight();
