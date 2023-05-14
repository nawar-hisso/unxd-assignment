import ACTION_TYPES from '../../Configs/ActionTypes';

export function setWallet(dispatch, wallet) {
  const action = {
    type: ACTION_TYPES.APP.SET_WALLET,
    payload: wallet,
  };

  dispatch(action);
}

export function setCollections(dispatch, collections) {
  const action = {
    type: ACTION_TYPES.APP.SET_COLLECTIONS,
    payload: collections,
  };

  dispatch(action);
}

export function setFormSubmitted(dispatch, isFormSubmitted) {
  const action = {
    type: ACTION_TYPES.APP.SET_FORM_SUBMITTED,
    payload: isFormSubmitted,
  };

  dispatch(action);
}
