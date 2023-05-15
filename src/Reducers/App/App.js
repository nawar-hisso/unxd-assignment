import ACTION_TYPES from '../../Configs/ActionTypes';
import INITIAL_STATES from '../../Configs/InitialStates';

/**
 * Initial state of the app, fetched from config
 * @constant
 * @type {Object}
 */
const appInitialState = INITIAL_STATES.APP;

/**
 * App reducer function to handle state changes based on actions.
 * @param {Object} state - Current state of the app.
 * @param {Function} action - An action dispatched to the reducer.
 * @returns {Object} - The new state.
 */
const app = (state = appInitialState, action = () => {}) => {
  switch (action.type) {
    case ACTION_TYPES.APP.SET_WALLET:
      /**
       * Set the wallet in the state.
       */
      return { ...state, wallet: action.payload };
    case ACTION_TYPES.APP.SET_COLLECTIONS:
      /**
       * Set the collections in the state.
       */
      return { ...state, collections: action.payload };
    case ACTION_TYPES.APP.SET_FORM_SUBMITTED:
      /**
       * Set the formSubmitted flag in the state.
       */
      return { ...state, formSubmitted: action.payload };
    default:
      /**
       * If no action type matches, return the current state.
       */
      return state;
  }
};

export default app;
