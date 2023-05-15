const ENV = process.env.REACT_APP_ENV || 'local';
const LOCAL_ENV = 'local';
const DEVELOPMENT_ENV = 'dev';
const PRODUCTION_ENV = 'prod';
const LOCAL_REDIRECT_URI = process.env.REACT_APP_LOCAL_REDIRECT_URI;
const DEV_REDIRECT_URI = process.env.REACT_APP_DEV_REDIRECT_URI;
const PROD_REDIRECT_URI = process.env.REACT_APP_PROD_REDIRECT_URI;

const REDIRECT_URIS = new Map([
  [LOCAL_ENV, LOCAL_REDIRECT_URI],
  [DEVELOPMENT_ENV, DEV_REDIRECT_URI],
  [PRODUCTION_ENV, PROD_REDIRECT_URI],
]);
const REDIRECT_URI = REDIRECT_URIS.get(ENV);

const INFURA_API_KEY = process.env.REACT_APP_INFURA_API_KEY;
const INFURA_API_SECRET_KEY = process.env.REACT_APP_INFURA_API_SECRET_KEY;

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
