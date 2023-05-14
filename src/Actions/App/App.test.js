// AppActions.test.js
import ACTION_TYPES from '../../Configs/ActionTypes';
import { setWallet, setCollections, setFormSubmitted } from './App';

describe('AppActions', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('sets the wallet', () => {
    const wallet = '0x123';
    setWallet(dispatch, wallet);
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTION_TYPES.APP.SET_WALLET,
      payload: wallet,
    });
  });

  it('sets the collections', () => {
    const collections = ['Collection1', 'Collection2'];
    setCollections(dispatch, collections);
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTION_TYPES.APP.SET_COLLECTIONS,
      payload: collections,
    });
  });

  it('sets the form submission status', () => {
    const isFormSubmitted = true;
    setFormSubmitted(dispatch, isFormSubmitted);
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTION_TYPES.APP.SET_FORM_SUBMITTED,
      payload: isFormSubmitted,
    });
  });
});
