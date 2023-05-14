import './App.css';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ROUTES_NAMES from './Configs/RoutesNames';
import {
  changeChainListener,
  changeWalletListener,
  insureRightChain,
} from './Actions/MetaMask/MetaMask';
import Header from './Components/Molecules/Header/Header';
import Footer from './Components/Molecules/Footer/Footer';
import HomePage from './Components/Templates/HomePage/HomePage';
import RegistrationForm from './Components/Templates/RegistrationForm/RegistrationForm';
import RequestSent from './Components/Templates/RequestSent/RequestSent';
import { useConnection } from './Hooks/useConnection';

const App = () => {
  const dispatch = useDispatch();

  useConnection(dispatch);

  useEffect(() => {
    changeWalletListener(dispatch);
  }, [dispatch]);

  useEffect(() => {
    changeChainListener();
  }, []);

  useEffect(() => {
    insureRightChain();
  }, []);

  return (
    <>
      <Header />
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
