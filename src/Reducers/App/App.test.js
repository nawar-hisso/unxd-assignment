import appReducer from './App';
import ACTION_TYPES from '../../Configs/ActionTypes';

describe('app reducer', () => {
  test('should return the initial state', () => {
    const initialState = {
      wallet: '',
      collections: [],
      formSubmitted: false,
    };
    const action = {};
    const newState = appReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test('should handle SET_WALLET', () => {
    const initialState = {
      wallet: '',
      collections: [],
      formSubmitted: false,
    };
    const wallet = { address: '0x123abc' };
    const action = {
      type: ACTION_TYPES.APP.SET_WALLET,
      payload: wallet,
    };
    const newState = appReducer(initialState, action);
    expect(newState.wallet).toEqual(wallet);
  });

  test('should handle SET_COLLECTIONS', () => {
    const initialState = {
      wallet: null,
      collections: [],
      formSubmitted: false,
    };
    const collections = ['collection1', 'collection2'];
    const action = {
      type: ACTION_TYPES.APP.SET_COLLECTIONS,
      payload: collections,
    };
    const newState = appReducer(initialState, action);
    expect(newState.collections).toEqual(collections);
  });

  test('should handle SET_FORM_SUBMITTED', () => {
    const initialState = {
      wallet: null,
      collections: [],
      formSubmitted: false,
    };
    const formSubmitted = true;
    const action = {
      type: ACTION_TYPES.APP.SET_FORM_SUBMITTED,
      payload: formSubmitted,
    };
    const newState = appReducer(initialState, action);
    expect(newState.formSubmitted).toEqual(formSubmitted);
  });

  test('should return the current state for unknown action types', () => {
    const currentState = {
      wallet: null,
      collections: [],
      formSubmitted: false,
    };
    const action = {
      type: 'UNKNOWN_ACTION',
    };
    const newState = appReducer(currentState, action);
    expect(newState).toEqual(currentState);
  });
});
