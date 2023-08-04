const MAX_REVIEW_LENGTH = 200;
const MIN_NAME_LENGTH = 1;
const MAX_NAME_LENGTH = 30;
const EMAIL_REGULAR_EXPR = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const NAME_REGULAR_EXPR = /^[А-Яа-яЁёA-Za-z]{1,}$/i;
const PHONE_REGULAR_EXPR = /^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i;

export {MAX_NAME_LENGTH, MAX_REVIEW_LENGTH, MIN_NAME_LENGTH, EMAIL_REGULAR_EXPR, NAME_REGULAR_EXPR, PHONE_REGULAR_EXPR};
