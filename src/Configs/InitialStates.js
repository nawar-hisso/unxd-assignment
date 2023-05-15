/**
 * @constant
 * @type {Object}
 * @description Initial state for the APP namespace. It holds state for the wallet, collections, and form submission status.
 */
const APP = {
  /**
   * @property
   * @type {string}
   * @description State to hold the wallet address.
   */
  wallet: '',

  /**
   * @property
   * @type {Array}
   * @description State to hold the collections of NFTs.
   */
  collections: [],

  /**
   * @property
   * @type {boolean}
   * @description State to hold the form submission status.
   */
  formSubmitted: false,
};

/**
 * @constant
 * @type {Object}
 * @description Object holding initial states for all namespaces in the application.
 */
const INITIAL_STATES = { APP };

export default INITIAL_STATES;
