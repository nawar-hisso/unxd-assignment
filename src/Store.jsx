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

/**
 * Define configs object for redux store .
 * @constant {Object} config .
 */
const config = {
  channel: COMMON.APP_NAME,

  // Enforce a type, oneOf['native', 'idb', 'localstorage', 'node']
  broadcastChannelOption: { type: 'localstorage' },
};

const middleWares = [createStateSyncMiddleware(config)];

// LoggerMiddleware - neat middleware that logs actions
const enhancer = compose(applyMiddleware(...middleWares));

// Combine all reducer in the system and pass it to redux
const rootReducer = (state, action) => appReducer(state, action);

// If session details are already exists initialize it to redux
const persistedState = localStorage.getItem(COMMON.APP_NAME)
  ? JSON.parse(localStorage.getItem(COMMON.APP_NAME))
  : {};

const initialState = deepExtend(
  createStore(rootReducer, enhancer).getState(),
  persistedState,
);

/**
 * Create a new store to hold redux state using @createStore .
 * Uses rootReducer that hold the combined reducers.
 *
 * @constant {Store} store .
 */
const store = createStore(rootReducer, initialState, enhancer);

// Subscribe to redux data object change event
store.subscribe(() => {
  localStorage.setItem(COMMON.APP_NAME, JSON.stringify(store.getState()));
});

/**
 * Uses the store to provide the updated state to the application.
 * Wrap its children with a Provider hols the store.
 * @param {Node} props .
 *
 * @component
 */
const Store = props => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};

initMessageListener(store);

export default Store;
