import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ROUTES_NAMES from '../Configs/RoutesNames';

/**
 * A hook that handles navigation based on the application's state.
 * @function
 * @returns {void}
 */
export function useConnection() {
  const navigate = useNavigate();
  /**
   * @constant
   * @type {Object}
   * @description The app state from the Redux store.
   */
  const { app } = useSelector(state => state);
  /**
   * @constant
   * @type {Object}
   * @description The current location object from the router.
   */
  const location = useLocation();

  useEffect(() => {
    /**
     * If the app has a wallet and collections, navigate to the registration form,
     * unless the current path is the request sent page and the form has not been submitted.
     * Otherwise, navigate to the home page.
     */
    if (app?.wallet && app?.collections?.length > 0) {
      if (
        location.pathname === ROUTES_NAMES.HOME ||
        (location.pathname === ROUTES_NAMES.REQUEST_SENT && !app?.formSubmitted)
      ) {
        navigate(ROUTES_NAMES.REGISTRATION_FORM);
      }
    } else {
      navigate(ROUTES_NAMES.HOME);
    }
  }, [app, navigate, location.pathname]);
}
