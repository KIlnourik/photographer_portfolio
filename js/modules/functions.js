'use strict';

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

export {isEscEvent, isEnterEvent, isLeftArrowEvent, isRightArrowEvent};
