import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store/Store'
import App from './App';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
