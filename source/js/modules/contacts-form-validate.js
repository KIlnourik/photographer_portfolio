'use strict'
import {
  MAX_REVIEW_LENGTH,
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  NAME_REGULAR_EXPR,
  PHONE_REGULAR_EXPR
} from './const.js';
import { openModal } from './modal.js';

const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
