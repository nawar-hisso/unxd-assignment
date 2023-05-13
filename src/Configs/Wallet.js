import CONSTANTS from './Constants';

const CONNECT_REQUEST_METHOD = 'eth_requestAccounts';
const CHANGE_WALLET_EVENT = 'accountsChanged';
const CANCEL_CODE = 4001;
const { REDIRECT_URI } = CONSTANTS;

const WALLET = {
  CONNECT_REQUEST_METHOD,
  CHANGE_WALLET_EVENT,
  CANCEL_CODE,
  REDIRECT_URI,
};

export default WALLET;
