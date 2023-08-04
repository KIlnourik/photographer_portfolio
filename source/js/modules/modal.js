'use strict';

import { isEscEvent } from "./functions.js";
import { upLink } from "./up-link.js";

const page = document.querySelector('.page');
const modal = document.querySelector('.modal');
const successModal = document.querySelector('.modal--success');
const failModal = document.querySelector('.modal--fail');

const onModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
  }
};
const openPhotoModal = () => {
  page.classList.add('modal-open');
  modal.classList.add('modal--opened');
  upLink.style.display = ('none');
  document.addEventListener('keydown', onModalEscKeydown);
}
const closeModal = () => {
  page.classList.remove('modal-open');
  modal.classList.remove('modal--opened');
  successModal.classList.remove('modal--opened');
  failModal.classList.remove('modal--opened');
  upLink.style.display = ('block');
  document.removeEventListener('keydown', onModalEscKeydown);
}

const openSendResultModal = (sendResult) => {
  if (sendResult) {
    successModal.classList.add('modal--opened');
    failModal.classList.remove('modal--opened');
    page.classList.add('modal-open');
    upLink.style.display = ('none');
    document.addEventListener('keydown', onModalEscKeydown);
  } else {
    failModal.classList.add('modal--opened');
    successModal.classList.remove('modal--opened');
    page.classList.add('modal-open');
    upLink.style.display = ('none');
    document.addEventListener('keydown', onModalEscKeydown);
  }
};

export { openPhotoModal, closeModal, openSendResultModal };
