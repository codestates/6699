import style from  './App.module.css';
import React, { useEffect } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Header from '../src/components/Header';
import LandingPage from '../src/pages/LandingPage';
import MyPage from '../src/pages/MyPage';
import MainPage from '../src/pages/MainPage';
import RankingPage from '../src/pages/RankingPage';
import MainPagePlusButton from '../src/components/MainPage/MainPagePlusButton';
import PostingPage from '../src/pages/PostingPage';
import MyEditPage from '../src/pages/MyEditPage';
import PostModal from './components/MainPage/PostModal';
import SayingModal from './components/MainPage/SayingModal';
import LoginModal from './components/MainPage/LoginModal';
import SignupModal from './components/MainPage/SignupModal';
import SayingCategoryModal from './components/MainPage/SayingCategoryModal';

import { useSelector, useDispatch } from 'react-redux';
import { login, logout, getUserInfo } from './store/AuthSlice';
import { REACT_APP_API_URL } from './config';
import axios from 'axios';


let selectedCategory = '건강'

function App() {
  const dispatch = useDispatch();
  const { loginModal, signupModal, postModal, sayingModal, sayingCategoryModal } = useSelector((state) => state.modal);
  const { focusedSayingId } = useSelector(state => state.main);
  const { isLogin, userInfo } = useSelector((state) => state.auth);

  const authentication = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/auth`, {
        withCredentials: true
      });
      if (response.data.data) {
        dispatch(getUserInfo(response.data.data.userInfo));
        dispatch(login());
      } else {
        dispatch(logout());
      }
    } catch (err) {
      console.log(err.response);
    }
  };
  
  useEffect(() => {
    authentication();
  }, [isLogin]);

  // PostModal에 현재 카테고리를 전달하기 위한 useEffect
  // focusedSayingId가 바뀔때마다 useEffect는 실행된다
  useEffect(async () => {
    // 현재 선택된 명언의 정보를 가지고 온다
    const sayingInfo = await axios.get(`${REACT_APP_API_URL}/${focusedSayingId}`)
    // 만약 카테고리를 찾지 못했다면, 그냥 return
    if(!sayingInfo.data.data.filteredSaying.category) {
      return
    } 
    // 카테고리를 찾았다면, selectedCategory에 현재 선택된 category를 넣어준다
    else {
      selectedCategory = sayingInfo.data.data.filteredSaying.category
      return
    }
  }, [focusedSayingId])
  
  return (
    <div className={style.container}>
      <Header />
      <Routes>
        <Route path = '/mainpage' element={<MainPagePlusButton/>}/>
      </Routes>
      {loginModal ? <LoginModal/> : null}
      {signupModal ? <SignupModal/> : null}
      {postModal ? <PostModal selectedCategory={selectedCategory} /> : null}
      {sayingModal ? <SayingModal/> : null}
      {sayingCategoryModal ? <SayingCategoryModal/> : null}
      <div className={style.header_downside}>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/mainpage/*' element={<MainPage/>}/>
          {/* <Route path='/mypage' element={<MyPage/>}/> */}
          <Route path='/mypage/*' element={<MyPage/>}/>
          <Route path='/editpage' element={<MyEditPage/>}/>
          <Route path='/rankingpage' element={<RankingPage/>}/>
          <Route path='/postingpage' element={<PostingPage/>}/>
        </Routes>
      </div>
    </div>
  );
}
export default App;