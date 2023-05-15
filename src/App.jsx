import './App.css';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ROUTES_NAMES from './Configs/RoutesNames';
import {
  changeWalletListener,
  insureRightChain,
} from './Actions/MetaMask/MetaMask';
import Header from './Components/Molecules/Header/Header';
import Footer from './Components/Molecules/Footer/Footer';
import HomePage from './Components/Templates/HomePage/HomePage';
import RegistrationForm from './Components/Templates/RegistrationForm/RegistrationForm';
import RequestSent from './Components/Templates/RequestSent/RequestSent';
import { useConnection } from './Hooks/useConnection';

/**
 * The main component of the application.
 * @returns {JSX.Element} The JSX code for the App component.
 */
const App = () => {
  // Getting the dispatch function from Redux.
  const dispatch = useDispatch();

  // Checking the connection status and updating the Redux state accordingly.
  useConnection(dispatch);

  // Adding a listener to the wallet change event on component mount.
  useEffect(() => {
    changeWalletListener(dispatch);
  }, [dispatch]);

  // Insuring the right Ethereum chain on component mount.
  useEffect(() => {
    insureRightChain();
  }, []);

  return (
    <>
      <Header />
      {/* Defining the routes for the application. */}
      <Routes>
        <Route path={ROUTES_NAMES.HOME} element={<HomePage />} />
        <Route
          path={ROUTES_NAMES.REGISTRATION_FORM}
          element={<RegistrationForm />}
        />
        <Route path={ROUTES_NAMES.REQUEST_SENT} element={<RequestSent />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
