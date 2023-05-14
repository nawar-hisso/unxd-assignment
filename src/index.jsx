import ReactDOM from 'react-dom/client';
import './fonts.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Store>
    <Router>
      <App />
    </Router>
  </Store>,
);
