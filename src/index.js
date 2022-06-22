import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import store from './redux/store';
ReactDOM.render(
  <ToastProvider autoDismiss autoDismissTimeout={3000} placement="top-right">
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>
  </ToastProvider>,
  document.getElementById('root')
);

