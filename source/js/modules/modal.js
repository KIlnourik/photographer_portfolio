'use strict';

import { isEscEvent } from "./functions.js";
import { upLink } from "./up-link.js";

const modal = document.querySelector('.modal');
const photoLinks = document.querySelectorAll('.photogallery__item');
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
  upLink.style.display = ('none');
  document.addEventListener('keydown', onModalEscKeydown);
}
const closeModal = () => {
  page.classList.remove('modal-open');
  modal.classList.remove('modal--opened');
  upLink.style.display = ('block');
  document.removeEventListener('keydown', onModalEscKeydown);
}

photoLinks.forEach(photoLink => { photoLink.addEventListener('click', openModal) });
closeButton.addEventListener('click', closeModal);

export { openModal, closeModal };
