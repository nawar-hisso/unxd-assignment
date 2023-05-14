import { Buffer } from 'buffer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import deepExtend from 'deep-extend';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync';

import appReducer from './Reducers';
import COMMON from './Configs/Common';

window.global = window;
window.Buffer = window.Buffer || Buffer;

const config = {
  channel: COMMON.APP_NAME,

  broadcastChannelOption: { type: 'localstorage' },
};

const middleWares = [createStateSyncMiddleware(config)];

const enhancer = compose(applyMiddleware(...middleWares));

const rootReducer = (state, action) => appReducer(state, action);

const persistedState = localStorage.getItem(COMMON.APP_NAME)
  ? JSON.parse(localStorage.getItem(COMMON.APP_NAME))
  : {};

const initialState = deepExtend(
  createStore(rootReducer, enhancer).getState(),
  persistedState,
);

const store = createStore(rootReducer, initialState, enhancer);

store.subscribe(() => {
  localStorage.setItem(COMMON.APP_NAME, JSON.stringify(store.getState()));
});

const Store = props => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};

initMessageListener(store);

export default Store;
