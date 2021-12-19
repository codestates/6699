import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import store from './store/modal-slice';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from '../src/components/ScrollRestoration';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
