import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';
import Footer from '../src/components/Footer.js';
function App() {
  return (
    <div>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
