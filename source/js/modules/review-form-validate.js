'use strict'

import {
  MAX_REVIEW_LENGTH,
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  NAME_REGULAR_EXPR,
  EMAIL_REGULAR_EXPR,
} from './const.js';
import { inputLengthValidate, inputRegexpValidate } from './functions.js';
import { openSendResultModal, closeModal } from './modal.js';

const nameInput = document.querySelector('#name');
const cityInput = document.querySelector('#city');
const surnameInput = document.querySelector('#surname');
const emailInput = document.querySelector('#email');
const reviewTextArea = document.querySelector('#review');
const submitBtn = document.querySelector('.send-review__button');
const closeModalButtons = document.querySelectorAll('.modal__button--close');

const nameValidationResult = () => {
  return inputLengthValidate(nameInput.value, MIN_NAME_LENGTH, MAX_NAME_LENGTH) &&
    inputRegexpValidate(nameInput.value, NAME_REGULAR_EXPR);
};

const cityValidationResult = () => {
  return inputLengthValidate(cityInput.value, MIN_NAME_LENGTH, MAX_NAME_LENGTH) &&
    inputRegexpValidate(cityInput.value, NAME_REGULAR_EXPR)
};

const reviewValidationResult = () => {
  return inputLengthValidate(reviewTextArea.value, MIN_NAME_LENGTH, MAX_REVIEW_LENGTH);
};

const emailValidationResult = () => {
  return inputLengthValidate(emailInput.value, MIN_NAME_LENGTH, MAX_REVIEW_LENGTH) &&
    inputRegexpValidate(emailInput.value, EMAIL_REGULAR_EXPR);
};

const validateReviewForm = () => {
  return nameValidationResult() && cityValidationResult() && reviewValidationResult() && emailValidationResult();
};

const clearForm = () => {
  nameInput.value = '';
  cityInput.value = '';
  surnameInput.value = '';
  emailInput.value = '';
  reviewTextArea.value = '';
}

submitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  openSendResultModal(validateReviewForm());
  clearForm();
});


closeModalButtons.forEach((btn) => btn.addEventListener('click', closeModal));
