import CONSTANTS from './Constants';

const CONNECT_REQUEST_METHOD = 'eth_requestAccounts';
const CHANGE_WALLET_EVENT = 'accountsChanged';
const CANCEL_CODE = 4001;
const { REDIRECT_URI } = CONSTANTS;
const METAMASK_MOBILE_BROWSER =
  'https://metamask.app.link/dapp/unxd.netlify.app/';
const ETHEREUM_CHAIN_ID = 1;
const GOERLI_CHAIN_ID = 1;
const CHAIN_ID =
  CONSTANTS.ENV === CONSTANTS.LOCAL_ENV ? ETHEREUM_CHAIN_ID : GOERLI_CHAIN_ID;

const WALLET = {
  CONNECT_REQUEST_METHOD,
  CHANGE_WALLET_EVENT,
  CANCEL_CODE,
  REDIRECT_URI,
  METAMASK_MOBILE_BROWSER,
  CHAIN_ID,
};

export default WALLET;
