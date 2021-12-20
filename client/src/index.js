import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from '../src/components/ScrollRestoration';
import modalSlice from './store/ModalSlice';
import landingSlice from './store/LandingSlice';
import mySlice from './store/MySlice';
import authSlice from './store/AuthSlice';
import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit"; 

const reducers = combineReducers({
  landing: landingSlice,
  modal: modalSlice,
  auth: authSlice,
  mypage: mySlice
});

const store = configureStore({ reducer: reducers });

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);