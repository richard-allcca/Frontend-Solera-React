import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//  useContext
import { ServiceProvider } from './context/serviceContext';
// styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ServiceProvider>

      <App />

    </ServiceProvider>

  </React.StrictMode>
);

