import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import store from './store/ModalSlice';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from '../src/components/ScrollRestoration';
import { combineReducers } from 'redux';
import landingstore from './store/LandingSlice';

// const rootReducer = combineReducers({
//    modal: modalSlice,
//  landing: landingstore
// });
ReactDOM.render(
  <Provider store={landingstore}>
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
