import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './Components/Templates/Home';
import ROUTES_NAMES from './Configs/RoutesNames';
import { changeWalletListener } from './Actions/MetaMask';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    changeWalletListener(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path={ROUTES_NAMES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
