import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ROUTES_NAMES from '../Configs/RoutesNames';

export function useConnection() {
  const navigate = useNavigate();
  const { app } = useSelector(state => state);
  const location = useLocation();

  useEffect(() => {
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
