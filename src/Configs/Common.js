const APP_NAME = 'UNXD';
const COLLECTION_CLASSES = {
  PLATINUM_BOX: {
    NAME: 'PLATINUM_BOX',
    MIN: 0,
    MAX: 75,
  },
  GOLD_BOX: {
    NAME: 'GOLD_BOX',
    MIN: 76,
    MAX: 750,
  },
  BLACK_BOX: {
    NAME: 'BLACK_BOX',
    MIN: 751,
    MAX: Number.POSITIVE_INFINITY,
  },
  GLASS_BOX: {
    NAME: 'GLASS_BOX',
    MIN: 0,
    MAX: 0,
  },
};

const EMAIL_REGEX =
  // eslint-disable-next-line security/detect-unsafe-regex
  /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*$/;

const INPUT_REQUIRED = 'INPUT_REQUIRED';
const INVALID_EMAIL = 'INVALID_EMAIL';
const FORM_SUCCESS = 'FORM_SUCCESS';

const FORM_STATUSES = { INPUT_REQUIRED, INVALID_EMAIL, FORM_SUCCESS };

const DOWNLOADED_FILE_NAME = 'unxd';

const COMMON = {
  APP_NAME,
  COLLECTION_CLASSES,
  EMAIL_REGEX,
  FORM_STATUSES,
  DOWNLOADED_FILE_NAME,
};

export default COMMON;
