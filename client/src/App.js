import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from '../src/components/Header.js'
import Saying from '../src/components/Saying.js'

function App() {
  return (
        <div>
      <Header/>
      <Saying/>
      </div>
  );
}

export default App;
