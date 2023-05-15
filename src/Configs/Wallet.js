import CONSTANTS from './Constants';

/**
 * @constant
 * @type {string}
 * @description Request method for connecting to MetaMask.
 */
const CONNECT_REQUEST_METHOD = 'eth_requestAccounts';

/**
 * @constant
 * @type {string}
 * @description Event name for when the wallet account is changed.
 */
const CHANGE_WALLET_EVENT = 'accountsChanged';

/**
 * @constant
 * @type {string}
 * @description Event name for when the chain is changed.
 */
const CHANGE_CHAIN_EVENT = 'chainChanged';

/**
 * @constant
 * @type {string}
 * @description Request method for switching Ethereum chains in MetaMask.
 */
const SWITCH_CHAIN_REQUEST_METHOD = 'wallet_switchEthereumChain';

/**
 * @constant
 * @type {string}
 * @description Request method for adding an Ethereum chain to MetaMask.
 */
const ADD_CHAIN_REQUEST_METHOD = 'wallet_addEthereumChain';

/**
 * @constant
 * @type {number}
 * @description Error code for a cancelled request.
 */
const CANCEL_CODE = 4001;

/**
 * @constant
 * @type {number}
 * @description Error code for an unadded chain.
 */
const CHAIN_NOT_ADDED_CODE = 4902;

/**
 * @constant
 * @type {string}
 * @description Redirect URI from the application's constants.
 */
const { REDIRECT_URI } = CONSTANTS;

/**
 * @constant
 * @type {string}
 * @description Link to open the application in MetaMask's mobile browser.
 */
const METAMASK_MOBILE_BROWSER = `https://metamask.app.link/dapp/${REDIRECT_URI}/`;

/**
 * @constant
 * @type {Object}
 * @description Configuration object for the Ethereum Mainnet.
 */
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

/**
 * @constant
 * @type {Object}
 * @description Configuration object for the Goerli test network.
 */
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

/**
 * @constant
 * @type {Map}
 * @description Map of environment names to their corresponding chain configurations.
 */
const CHAINS = new Map([
  [CONSTANTS.LOCAL_ENV, GOERLI_CHAIN],
  [CONSTANTS.DEVELOPMENT_ENV, GOERLI_CHAIN],
  [CONSTANTS.PRODUCTION_ENV, ETHEREUM_CHAIN],
]);

/**
 * @constant
 * @type {Object}
 * @description Chain configuration for the current environment.
 */
const CHAIN = CHAINS.get(CONSTANTS.ENV);

/**
 * @constant
 * @type {number}
 * @description Status code for a connected wallet.
 */
const CONNECTED = 0;

/**
 * @constant
 * @type {number}
 * @description Status code for a wallet with no collections.
 */
const NO_COLLECTIONS = 1;

/**
 * @constant
 * @type {number}
 * @description Status code for a wallet that is onboarding.
 */
const ONBOARDING = 2;

/**
 * @constant
 * @type {number}
 * @description Status code for a wallet on a mobile device.
 */
const ON_MOBILE = 3;

/**
 * @constant
 * @type {number}
 * @description Status code for a cancelled operation.
 */
const CANCELLED = 4;

/**
 * @constant
 * @type {number}
 * @description Status code for an error.
 */
const ERROR = 5;

/**
 * @constant
 * @type {Object}
 * @description Object mapping status names to their corresponding codes.
 */
const CONNECTION_STATUSES = {
  CONNECTED,
  NO_COLLECTIONS,
  ONBOARDING,
  ON_MOBILE,
  CANCELLED,
  ERROR,
};

/**
 * @constant
 * @type {Object}
 * @description Configuration object for the wallet.
 */
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
