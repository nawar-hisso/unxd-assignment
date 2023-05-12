import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Templates/Home';
import ROUTES_NAMES from './Configs/RoutesNames';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES_NAMES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
