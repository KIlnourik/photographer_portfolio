const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

const isLeftArrowEvent = (evt) => {
  return evt.key === 'ArrowLeft';
}
const isRightArrowEvent = (evt) => {
  return evt.key === 'ArrowRight';
}

const inputLengthValidate = (inputFieldValue, minLength, maxLength) =>
  (inputFieldValue && inputFieldValue.length > minLength ||
    inputFieldValue && inputFieldValue.length <= maxLength) ? true : false;

const inputRegexpValidate = (inputFieldValue, regular_expr) => !regular_expr.test(inputFieldValue) ? false : true;

export {isEscEvent, isEnterEvent, isLeftArrowEvent, isRightArrowEvent, inputLengthValidate, inputRegexpValidate};
