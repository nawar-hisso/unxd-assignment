import ACTION_TYPES from '../Configs/ActionTypes';

export function setWallet(dispatch, wallet) {
  const action = {
    type: ACTION_TYPES.APP.SET_WALLET,
    payload: wallet,
  };

  dispatch(action);
}
