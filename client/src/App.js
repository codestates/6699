import style from  './App.module.css';
import React, { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Header from '../src/components/Header';
import LandingPage from '../src/pages/LandingPage';
import CurrentPage from '../src/components/LandingPage/Saying';
import MyPage from '../src/pages/MyPage';
import MainPage from '../src/pages/MainPage';
import RankingPage from '../src/pages/RankingPage';
import MainPagePlusButton from '../src/components/MainPage/MainPagePlusButton';
import PostingPage from '../src/pages/PostingPage';
import Footer from '../src/components/Footer';
import MyEditPage from '../src/pages/MyEditPage';
import LoginModal from './components/MainPage/LoginModal';
import SignupModal from './components/MainPage/SignupModal';
import { useSelector, useDispatch } from 'react-redux';
import PrivacyModal from './components/MainPage/PrivacyModal';
import PostModal from '../src/components/MainPage/PostModal';
import SayingModal from '../src/components/MainPage/SayingModal';

function App() {
  const { loginModal, signupModal,postModal,sayingModal } = useSelector((state) => state.modal);
  return (
    <div className={style.container}>
      <Header />
      <Routes>
        <Route path = '/mainpage' element={<MainPagePlusButton/>}/>
      </Routes>
      {loginModal ? <LoginModal/> : null}
      {signupModal ? <SignupModal/> : null}
      {postModal ? <PostModal/> : null}
      {sayingModal ? <SayingModal/> : null}
      <div className={style.header_downside}>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/mainpage/*' element={<MainPage/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
          <Route path='/editpage' element={<MyEditPage/>}/>
          <Route path='/rankingpage' element={<RankingPage/>}/>
          <Route path='/postingpage' element={<PostingPage/>}/>
        </Routes>
      </div>
    </div>
  );
}
export default App;