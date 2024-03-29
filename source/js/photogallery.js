import { openPhotoModal, closeModal } from './modules/modal.js';
import './modules/menu-nav.js';
import './modules/modal.js';
import './modules/swiper.js';
import './modules/up-link.js';

const photoLinks = document.querySelectorAll('.photogallery__item');
const closeCrossButton = document.querySelector('.modal__close');

closeCrossButton.addEventListener('click', closeModal);
photoLinks.forEach((photoLink) => photoLink.addEventListener('click', openPhotoModal));
