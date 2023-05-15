/**
 * @constant
 * @type {string}
 * @description Current environment of the application, defaults to 'local'.
 */
const ENV = process.env.REACT_APP_ENV || 'local';

/**
 * @constant
 * @type {string}
 * @description String representing local environment.
 */
const LOCAL_ENV = 'local';

/**
 * @constant
 * @type {string}
 * @description String representing development environment.
 */
const DEVELOPMENT_ENV = 'dev';

/**
 * @constant
 * @type {string}
 * @description String representing production environment.
 */
const PRODUCTION_ENV = 'prod';

/**
 * @constant
 * @type {string}
 * @description Redirect URI for local environment.
 */
const LOCAL_REDIRECT_URI = process.env.REACT_APP_LOCAL_REDIRECT_URI;

/**
 * @constant
 * @type {string}
 * @description Redirect URI for development environment.
 */
const DEV_REDIRECT_URI = process.env.REACT_APP_DEV_REDIRECT_URI;

/**
 * @constant
 * @type {string}
 * @description Redirect URI for production environment.
 */
const PROD_REDIRECT_URI = process.env.REACT_APP_PROD_REDIRECT_URI;

/**
 * @constant
 * @type {Map}
 * @description Map for redirect URIs for different environments.
 */
const REDIRECT_URIS = new Map([
  [LOCAL_ENV, LOCAL_REDIRECT_URI],
  [DEVELOPMENT_ENV, DEV_REDIRECT_URI],
  [PRODUCTION_ENV, PROD_REDIRECT_URI],
]);

/**
 * @constant
 * @type {string}
 * @description Redirect URI for current environment.
 */
const REDIRECT_URI = REDIRECT_URIS.get(ENV);

/**
 * @constant
 * @type {string}
 * @description Infura API Key.
 */
const INFURA_API_KEY = process.env.REACT_APP_INFURA_API_KEY;

/**
 * @constant
 * @type {string}
 * @description Infura API Secret Key.
 */
const INFURA_API_SECRET_KEY = process.env.REACT_APP_INFURA_API_SECRET_KEY;

/**
 * @constant
 * @type {Object}
 * @description The constant values related to the application environment and Infura API.
 */
const CONSTANTS = {
  ENV,
  LOCAL_ENV,
  DEVELOPMENT_ENV,
  PRODUCTION_ENV,
  REDIRECT_URI,
  INFURA_API_KEY,
  INFURA_API_SECRET_KEY,
};

export default CONSTANTS;
