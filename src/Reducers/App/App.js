import ACTION_TYPES from '../../Configs/ActionTypes';
import INITIAL_STATES from '../../Configs/InitialStates';

const appInitialState = INITIAL_STATES.APP;

const app = (state = appInitialState, action = () => {}) => {
  switch (action.type) {
    case ACTION_TYPES.APP.SET_WALLET:
      return { ...state, wallet: action.payload };
    case ACTION_TYPES.APP.SET_COLLECTIONS:
      return { ...state, collections: action.payload };
    case ACTION_TYPES.APP.SET_FORM_SUBMITTED:
      return { ...state, formSubmitted: action.payload };
    default:
      return state;
  }
};

export default app;
