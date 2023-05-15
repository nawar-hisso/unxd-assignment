import ReactDOM from 'react-dom/client';
import './fonts.css'; // Importing custom font styles
import './index.css'; // Importing global styles
import { BrowserRouter as Router } from 'react-router-dom'; // Importing router component from react-router-dom
import App from './App'; // Importing the main application component
import Store from './Store'; // Importing the Redux store

// Creating a root for the react application to mount
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application within the root
root.render(
  // Wrapping the App component with the Redux Store and Router
  <Store>
    <Router>
      <App />
    </Router>
  </Store>,
);
