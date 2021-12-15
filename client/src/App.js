import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../src/components/Header';
import LandingPage from '../src/pages/LandingPage';
import MyPage from '../src/pages/MyPage';
import MainPage from '../src/pages/MainPage';
import Footer from '../src/components/Footer';
function App() {
  return (
    <div className='container'>
      <Header />
      <div className='header-downside'>
        <MyPage />
      </div>
    </div>
  );
}
export default App;