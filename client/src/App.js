import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from '../src/components/Header';
import LandingPage from '../src/pages/LandingPage';
import MyPage from '../src/pages/MyPage';
import MainPage from '../src/pages/MainPage';
import RankingPage from '../src/pages/RankingPage';
import MainPagePlusButton from '../src/components/MainPagePlusButton';
function App() {
  return (
    <div className='container'>
      <Header />
      <MainPagePlusButton/>
      <div className='header-downside'>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route path='/mainpage' element={<MainPage/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
          <Route path='/rankingpage' element={<RankingPage/>}/>
        </Routes>
      </div>
    </div>
  );
}
export default App;