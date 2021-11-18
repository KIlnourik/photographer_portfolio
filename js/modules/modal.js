'use strict';

import { isEscEvent } from "./functions.js";

const modal = document.querySelector('.modal');
const photoLinks = document.querySelectorAll('.photos__link');
const closeButton = document.querySelector('.modal__close');
const page = document.querySelector('.page');

const onModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
  }
};
const openModal = () => {
  page.classList.add('modal-open');
  modal.classList.add('modal--opened');
  document.addEventListener('keydown', onModalEscKeydown);
}
const closeModal = () => {
  page.classList.remove('modal-open');
  modal.classList.remove('modal--opened');
  document.removeEventListener('keydown', onModalEscKeydown);
}

photoLinks.forEach(photoLink => { photoLink.addEventListener('click', openModal) });

closeButton.addEventListener('click', closeModal);
export { openModal, closeModal };
