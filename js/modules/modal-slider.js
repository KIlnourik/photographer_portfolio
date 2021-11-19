'use strict';

import { isLeftArrowEvent, isRightArrowEvent } from "./functions.js";

const photos = document.querySelectorAll('.modal__photo');
const photoContainer = document.querySelector('.modal__photo-container');
const modalWrapper = document.querySelector('.modal__wrapper');
const prevButton = document.querySelector('.modal__button--prev');
const nextButton = document.querySelector('.modal__button--next');
let count = 0;
let width;

const init = () => {
  width = modalWrapper.offsetWidth;
  photoContainer.style.width = width * photos.length + 'px';
  photos.forEach(photo => {
    photo.style.width = width + 'px';
  })
  switchNextSlide();
}
const switchNextSlide = () => {
  photoContainer.style.transform = `translate(-${+count * width}px`;
}
const switchPreviousSlide = () => {
  photoContainer.style.transform = `translate(-${+count * width}px`;
}
const rollSlide = () => {
  count++;
  if (count >= photos.length) {
    count = 0;
  }
  switchNextSlide();
}
const rollBackSlide = () => {
  count--;
  if (count < 0) {
    count = photos.length - 1;
  }
  switchPreviousSlide();
}

const onModalArrowKeydown = (evt) => {
  if (isLeftArrowEvent(evt)) {
    evt.preventDefault();
    rollBackSlide();
  } else if (isRightArrowEvent(evt)) {
    evt.preventDefault();
    rollSlide();
  }
};

nextButton.addEventListener('click', rollSlide);
prevButton.addEventListener('click', rollBackSlide);

export { init, onModalArrowKeydown };
