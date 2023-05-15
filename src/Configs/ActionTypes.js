/**
 * @constant
 * @type {Object}
 * @description The actions available within the 'APP' namespace.
 */
const APP = {
  /**
   * Action to set the wallet state.
   * @type {string}
   */
  SET_WALLET: 'SET_WALLET',

  /**
   * Action to set the collections state.
   * @type {string}
   */
  SET_COLLECTIONS: 'SET_COLLECTIONS',

  /**
   * Action to set the form submitted state.
   * @type {string}
   */
  SET_FORM_SUBMITTED: 'SET_FORM_SUBMITTED',
};

/**
 * @constant
 * @type {Object}
 * @description The object that includes all action types used in the application.
 */
const ACTION_TYPES = { APP };

export default ACTION_TYPES;
