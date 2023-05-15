import CONSTANTS from './Constants';

/**
 * @constant
 * @type {string}
 * @description DG_FAMILY contract address on the test network.
 */
const TESTNET_DG_FAMILY = '0x96000D4457b9A380CAa979C243e1d65fcaC41D53';

/**
 * @constant
 * @type {string}
 * @description DG_FAMILY contract address on the main network.
 */
const MAINNET_DG_FAMILY = '0xEb6C5acCafD8515c1b9E4c794bDC41532C5543EC';

/**
 * @constant
 * @type {string}
 * @description GLASS_BOX contract address on the test network.
 */
const TESTNET_GLASS_BOX = '0xf53A0E3078c698b596D9bdCbADEd2ABcCd88De23';

/**
 * @constant
 * @type {string}
 * @description GLASS_BOX contract address on the main network.
 */
const MAINNET_GLASS_BOX = '0x68F4Ba8018216542Ac2Ab8125166Be66304DD71c';

/**
 * @constant
 * @type {Map}
 * @description Map for DG_FAMILY contract addresses for different environments.
 */
const DG_FAMILY = new Map([
  [CONSTANTS.LOCAL_ENV, TESTNET_DG_FAMILY],
  [CONSTANTS.DEVELOPMENT_ENV, TESTNET_DG_FAMILY],
  [CONSTANTS.PRODUCTION_ENV, MAINNET_DG_FAMILY],
]);

/**
 * @constant
 * @type {string}
 * @description DG_FAMILY contract address for current environment.
 */
const DG_FAMILY_COLLECTION = DG_FAMILY.get(CONSTANTS.ENV);

/**
 * @constant
 * @type {Map}
 * @description Map for GLASS_BOX contract addresses for different environments.
 */
const GLASS_BOX = new Map([
  [CONSTANTS.LOCAL_ENV, TESTNET_GLASS_BOX],
  [CONSTANTS.DEVELOPMENT_ENV, TESTNET_GLASS_BOX],
  [CONSTANTS.PRODUCTION_ENV, MAINNET_GLASS_BOX],
]);

/**
 * @constant
 * @type {string}
 * @description GLASS_BOX contract address for current environment.
 */
const GLASS_BOX_COLLECTION = GLASS_BOX.get(CONSTANTS.ENV);

/**
 * @constant
 * @type {Object}
 * @description Object holding contract addresses for different collections in the current environment.
 */
const CONTRACTS = { DG_FAMILY_COLLECTION, GLASS_BOX_COLLECTION };

export default CONTRACTS;
