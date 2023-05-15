import CONSTANTS from './Constants';

const CONNECT_REQUEST_METHOD = 'eth_requestAccounts';
const CHANGE_WALLET_EVENT = 'accountsChanged';
const CHANGE_CHAIN_EVENT = 'chainChanged';
const SWITCH_CHAIN_REQUEST_METHOD = 'wallet_switchEthereumChain';
const ADD_CHAIN_REQUEST_METHOD = 'wallet_addEthereumChain';
const CANCEL_CODE = 4001;
const CHAIN_NOT_ADDED_CODE = 4902;
const { REDIRECT_URI } = CONSTANTS;
const METAMASK_MOBILE_BROWSER = `https://metamask.app.link/dapp/${REDIRECT_URI}/`;

const ETHEREUM_CHAIN = {
  ID: 1,
  NAME: 'Ethereum Mainnet',
  RPC_URL: 'https://mainnet.infura.io/v3/',
  BLOCK_EXPLORER_URL: 'https://etherscan.io',
  CURRENCY: {
    NAME: 'Ether',
    SYMBOL: 'ETH',
    DECIMALS: 18,
  },
};

const GOERLI_CHAIN = {
  ID: 5,
  NAME: 'Goerli test network',
  RPC_URL: 'https://goerli.infura.io/v3/',
  BLOCK_EXPLORER_URL: 'https://goerli.etherscan.io',
  CURRENCY: {
    NAME: 'Goerli Ether',
    SYMBOL: 'gETH',
    DECIMALS: 18,
  },
};

const CHAINS = new Map([
  [CONSTANTS.LOCAL_ENV, GOERLI_CHAIN],
  [CONSTANTS.DEVELOPMENT_ENV, GOERLI_CHAIN],
  [CONSTANTS.PRODUCTION_ENV, ETHEREUM_CHAIN],
]);
const CHAIN = CHAINS.get(CONSTANTS.ENV);

const CONNECTED = 0;
const NO_COLLECTIONS = 1;
const ONBOARDING = 2;
const ON_MOBILE = 3;
const CANCELLED = 4;
const ERROR = 5;

const CONNECTION_STATUSES = {
  CONNECTED,
  NO_COLLECTIONS,
  ONBOARDING,
  ON_MOBILE,
  CANCELLED,
  ERROR,
};

const WALLET = {
  CONNECT_REQUEST_METHOD,
  CHANGE_WALLET_EVENT,
  CHANGE_CHAIN_EVENT,
  SWITCH_CHAIN_REQUEST_METHOD,
  ADD_CHAIN_REQUEST_METHOD,
  CANCEL_CODE,
  CHAIN_NOT_ADDED_CODE,
  REDIRECT_URI,
  METAMASK_MOBILE_BROWSER,
  CHAIN,
  CONNECTION_STATUSES,
};

export default WALLET;
