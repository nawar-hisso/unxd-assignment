import ACTION_TYPES from '../../Configs/ActionTypes';

/**
 * Set the wallet in the app state.
 *
 * @param {Function} dispatch - The dispatch function from Redux.
 * @param {Object} wallet - The wallet object to be set in the state.
 */
export const setWallet = (dispatch, wallet) => {
  const action = {
    type: ACTION_TYPES.APP.SET_WALLET,
    payload: wallet,
  };

  dispatch(action);
};

/**
 * Set the collections in the app state.
 *
 * @param {Function} dispatch - The dispatch function from Redux.
 * @param {Array} collections - The collections array to be set in the state.
 */
export const setCollections = (dispatch, collections) => {
  const action = {
    type: ACTION_TYPES.APP.SET_COLLECTIONS,
    payload: collections,
  };

  dispatch(action);
};

/**
 * Set the form submission status in the app state.
 *
 * @param {Function} dispatch - The dispatch function from Redux.
 * @param {boolean} isFormSubmitted - The form submission status to be set in the state.
 */
export const setFormSubmitted = (dispatch, isFormSubmitted) => {
  const action = {
    type: ACTION_TYPES.APP.SET_FORM_SUBMITTED,
    payload: isFormSubmitted,
  };

  dispatch(action);
};
