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
    <Router>
    <div className='container'>
      <Header />
      <div className='header-downside'>
        <Routes>
          <Route exact path="/">
            <LandingPage/>
          </Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}
export default App;