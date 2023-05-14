import ACTION_TYPES from '../../Configs/ActionTypes';

export const setWallet = (dispatch, wallet) => {
  const action = {
    type: ACTION_TYPES.APP.SET_WALLET,
    payload: wallet,
  };

  dispatch(action);
};

export const setCollections = (dispatch, collections) => {
  const action = {
    type: ACTION_TYPES.APP.SET_COLLECTIONS,
    payload: collections,
  };

  dispatch(action);
};

export const setFormSubmitted = (dispatch, isFormSubmitted) => {
  const action = {
    type: ACTION_TYPES.APP.SET_FORM_SUBMITTED,
    payload: isFormSubmitted,
  };

  dispatch(action);
};
