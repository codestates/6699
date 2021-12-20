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
import mainSlice from './store/MainSlice';
import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit"; 
import { persistReducer, persistStore, PERSIST } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const reducers = combineReducers({
  landing: landingSlice,
  modal: modalSlice,
  auth: authSlice,
  mypage: mySlice,
  main: mainSlice
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({ 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST]
      }
    })
});

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);