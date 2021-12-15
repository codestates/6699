import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../src/components/Header';
import LandingPage from '../src/pages/LandingPage';
import MainPage from '../src/pages/MainPage';
import Footer from '../src/components/Footer';
function App() {
  return (
    <div>
      <Header/>
      {/* <LandingPage/> */}
      <MainPage/>
      <Footer/>
    </div>
  );
}
export default App;
