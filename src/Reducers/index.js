import { combineReducers } from 'redux';
import app from './App/App';

/**
 * Root reducer combining all the individual reducers in the application.
 * @function
 * @returns {Function} - Combined reducer.
 */
export default combineReducers({ app });
