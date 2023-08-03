import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper('.modal__wrapper', {

  navigation: {
    nextEl: '.modal__button--next',
    prevEl: '.modal__button--prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return 'Фото <span class= "' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  grabCursor: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  effect: 'flip',
  flipEffect: {
    slideShadows: true,
  },
  preloadImages: false,
  lazy: true,
  a11y: {
    enabled: true,
    prevSlideMessage: 'Предыдущее фото',
    nextSlideMessage: 'Следующее фото',
  },
})


export { swiper };
