'use strict';

import './modules/menu-nav.js';
import { openModal } from './modules/modal.js';
import './modules/modal.js';
import './modules/swiper.js';
import './modules/up-link.js';

const photoLinks = document.querySelectorAll('.photogallery__item');

photoLinks.forEach(photoLink => { photoLink.addEventListener('click', openModal) });
