import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';
import MyPage from '../src/pages/MyPage';

function App() {
  return (
    <div>
      <MyPage/>
    </div>
  );
}
export default App;
