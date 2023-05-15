import { Buffer } from 'buffer'; // Importing Buffer from the 'buffer' library
import { createStore, applyMiddleware, compose } from 'redux'; // Importing redux functions to create a store and apply middleware
import { Provider } from 'react-redux'; // Importing the Redux Provider component
import deepExtend from 'deep-extend'; // Importing 'deep-extend' library for deep cloning objects
import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync'; // Importing functions for state syncing between different tabs

import appReducer from './Reducers'; // Importing the root reducer
import COMMON from './Configs/Common'; // Importing common constants

window.global = window; // Setting global window object
window.Buffer = window.Buffer || Buffer; // Setting Buffer object on window

// Configuring the state sync middleware
const config = {
  channel: COMMON.APP_NAME,
  broadcastChannelOption: { type: 'localstorage' }, // Setting the broadcast channel to local storage
};

// Creating an array of middlewares to be applied to the store
const middleWares = [createStateSyncMiddleware(config)];

// Composing all the middlewares to enhance the store
const enhancer = compose(applyMiddleware(...middleWares));

// Defining the root reducer
const rootReducer = (state, action) => appReducer(state, action);

// Getting the persisted state from local storage
const persistedState = localStorage.getItem(COMMON.APP_NAME)
  ? JSON.parse(localStorage.getItem(COMMON.APP_NAME))
  : {};

// Creating an initial state by extending the default state with the persisted state
const initialState = deepExtend(
  createStore(rootReducer, enhancer).getState(),
  persistedState,
);

// Creating the store with the root reducer, initial state and enhancer
const store = createStore(rootReducer, initialState, enhancer);

// Subscribing to the store updates to persist them in local storage
store.subscribe(() => {
  localStorage.setItem(COMMON.APP_NAME, JSON.stringify(store.getState()));
});

// Creating a Store component which wraps the Redux Provider component around its children
const Store = props => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};

// Initializing message listener for state sync middleware
initMessageListener(store);

export default Store;
