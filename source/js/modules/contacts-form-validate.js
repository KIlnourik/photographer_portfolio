'use strict'
import {
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  NAME_REGULAR_EXPR,
  PHONE_REGULAR_EXPR
} from './const.js';
import { inputLengthValidate, inputRegexpValidate } from './functions.js';
import { openSendResultModal, closeModal } from './modal.js';

const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const submitBtn = document.querySelector('.contacts__form-submit');
const closeModalButtons = document.querySelectorAll('.modal__button--close');

const nameValidationResult = () => {
  return inputLengthValidate(nameInput.value, MIN_NAME_LENGTH, MAX_NAME_LENGTH) &&
    inputRegexpValidate(nameInput.value, NAME_REGULAR_EXPR);
};

const phoneValidationResult = () => {
  return inputLengthValidate(phoneInput.value, MIN_NAME_LENGTH, MAX_NAME_LENGTH) &&
  inputRegexpValidate(phoneInput.value, PHONE_REGULAR_EXPR);
};

const clearForm = () => {
  nameInput.value = '';
  phoneInput.value = '';
};

const validateReviewForm = () => {
  return nameValidationResult() && phoneValidationResult();
};

submitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  openSendResultModal(validateReviewForm());
  clearForm();
});

closeModalButtons.forEach((btn) => btn.addEventListener('click', closeModal));
