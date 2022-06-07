import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ListCardProvider } from './context/listCardContext';
import { ServiceProvider } from './context/serviceContext';
// styles
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ServiceProvider>
      <ListCardProvider>
    <App />
      </ListCardProvider>
    </ServiceProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
