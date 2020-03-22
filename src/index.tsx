import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import './assets/generated/base.css';
import { AppContextProvider } from 'store/contexts/app/appContext';
// import StoreProvider from 'store/StoreProvider';
// import store from './store/store';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  rootElement);
