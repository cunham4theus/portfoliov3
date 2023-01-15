

TweenMax.to('.home__overlay', 2, {
  delay: 2,
  top: '100%',
  ease: Expo.easeInOut,
});

TweenMax.to('.home__overlay', 2, {
  delay: 0.2,
  height: '100%',
  ease: Expo.easeInOut,
});

TweenMax.to('.nav', 2, {
  delay: 2.3,  
  opacity: 1,
  ease: Expo.easeInOut,
});
TweenMax.from('.home__container--text h1', 1, {
  delay: 3,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});

TweenMax.from('.home__container--text p', 1, {
  delay: 3,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});

TweenMax.from('.ellipse-container', 1, {
  delay: 3.4,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from('.yellow', 1, {
  delay: 3.5,
  opacity: 0,
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
  delay: 3.6,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});
