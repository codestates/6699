import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from '../src/components/Header.js'
import Saying from '../src/components/Saying.js'

function App() {
  return (
    <div className='container'>
      <Header/>
      <Saying/>
      <div className='Landing-Example1'>
        <div className='Landing-Ex1-Image'/>
        <div className='Landing-Ex1-Mention'/>
      </div>
      <div className='Landing-Example2'>
        <div className='Landing-Ex2-Image'/>
        <div className='Landing-Ex2-Mention'/>
      </div>
      <div className='Landing-Example3'>
        <div className='Landing-Ex3-Image'/>
        <div className='Landing-Ex3-Mention'/>
      </div>
      <div className='Landing-Big-Mention'>모두를 움직이게 만드는
당신의 명언,        
 지금 시작해보세요.</div>
    <div className='Landing-Big-6699'>
      <div className='Landing-Big-66'/>
      <div className='Landing-Big-99'/>
    </div>
    </div>
  );
}

export default App;
