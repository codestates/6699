import './App.css';
import React, { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Header from '../src/components/Header';
import LandingPage from '../src/pages/LandingPage';
import MyPage from '../src/pages/MyPage';
import MainPage from '../src/pages/MainPage';
import RankingPage from '../src/pages/RankingPage';
import MainPagePlusButton from '../src/components/MainPagePlusButton';
import PostingPage from '../src/pages/PostingPage';
import Footer from '../src/components/Footer';
function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path = '/mainpage' element={<MainPagePlusButton/>}/>
      </Routes>
      <div className='header-downside'>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route path='/mainpage' element={<MainPage/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
          <Route path='/rankingpage' element={<RankingPage/>}/>
          <Route path='/postingpage' element={<PostingPage/>}/>
        </Routes>
      </div>
    </div>
  );
}
export default App;