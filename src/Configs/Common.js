/**
 * @constant
 * @type {string}
 * @description The name of the application.
 */
const APP_NAME = 'UNXD';

/**
 * @constant
 * @type {Object}
 * @description The categories/classes of collections available in the application.
 */
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

/**
 * @constant
 * @type {RegExp}
 * @description Regular expression for validating an email.
 */
const EMAIL_REGEX =
  // eslint-disable-next-line security/detect-unsafe-regex
  /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*$/;

/**
 * @constant
 * @type {RegExp}
 * @description Regular expression for identifying a mobile device.
 */
const MOBILE_REGEX =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

/**
 * @constant
 * @type {string}
 * @description Status code for input required.
 */
const INPUT_REQUIRED = 'INPUT_REQUIRED';

/**
 * @constant
 * @type {string}
 * @description Status code for invalid email.
 */
const INVALID_EMAIL = 'INVALID_EMAIL';

/**
 * @constant
 * @type {string}
 * @description Status code for form submission success.
 */
const FORM_SUCCESS = 'FORM_SUCCESS';

/**
 * @constant
 * @type {Object}
 * @description The statuses for form submission.
 */
const FORM_STATUSES = { INPUT_REQUIRED, INVALID_EMAIL, FORM_SUCCESS };

/**
 * @constant
 * @type {string}
 * @description The name for the downloaded file.
 */
const DOWNLOADED_FILE_NAME = 'unxd';

/**
 * @constant
 * @type {Object}
 * @description The common constants used in the application.
 */
const COMMON = {
  APP_NAME,
  COLLECTION_CLASSES,
  EMAIL_REGEX,
  MOBILE_REGEX,
  FORM_STATUSES,
  DOWNLOADED_FILE_NAME,
};

export default COMMON;
