import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Templates/Home';
import ROUTES_NAMES from './Configs/RoutesNames';
import Store from './Store';

const App = () => {
  return (
    <Store>
      <Router>
        <Routes>
          <Route path={ROUTES_NAMES.HOME} element={<Home />} />
        </Routes>
      </Router>
    </Store>
  );
};

export default App;
