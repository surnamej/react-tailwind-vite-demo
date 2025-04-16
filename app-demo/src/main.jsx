import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import the global reset and Tailwind CSS
import { Provider } from 'react-redux';
import store from './app/store'; // Import the Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
