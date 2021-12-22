import MyPageCategory from '../components/MyPage/MyPageCategory.js';
import MyEditPage from './MyEditPage.js';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import MyPosting from '../components/MyPage/MyPosting'
import MySaying from '../components/MyPage/MySaying'
import style from '../pages/MyPage.module.css'
import MyComment from '../components/MyPage/MyComment'
import MyLikedPosting from '../components/MyPage/MyLikedPosting'
import MyLikedSaying from '../components/MyPage/MyLikedSaying'
import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, getUserInfo } from '../store/AuthSlice'
import {setIsPost} from '../store/MySlice'
import { REACT_APP_API_URL } from '../config';
import axios from 'axios';
import Footer from '../components/Footer';

function MyPage(){
const dispatch = useDispatch();
const navigate = useNavigate();
//카테고리 탭에서 어떤 탭을 눌렀는지 여부
const { isFocus } = useSelector((state) => state.mypage)
//토글에서 게시물 눌렀는지 여부
const {isPost} = useSelector((state) => state.mypage)
    
    const handleLogout = async () => {
      try {
        await axios.post(
          `${REACT_APP_API_URL}/user/logout`,
          {},
          { withCredentials: true }
        );
        dispatch(logout());
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    }
    
    return (
        <div id={style.container}>
          <div id = {style.under_container}>
            {/*왼쪽 사용자 영역*/}
         <div id={style.user_container}>
          <div id={style.user_profile_wrapper}>
           <div id={style.user_mini_wrapper}>
            <div id={style.profile_image}></div>
             <div id={style.user_name}>꼬부기</div>
           </div>
          </div>
        <div id={style.message_wrapper}>
            <div id={style.message}>
            평생 다이어트중
            </div>
        </div>
        <div className = {style.buttons}>
            <Routes>
                {/* <Route path='/editpage' element={<MyEditPage/>}></Route> */}
                <Route path='/editpage/*' element={<MyEditPage/>}></Route>
            </Routes>
        <Link to ='/editpage'>
          <button id={style.profile_setting}>
          프로필 설정
          </button>
        </Link>
        <Link to ='/mainpage'>
          <button id= {style.logout} onClick={handleLogout}>
            로그아웃
          </button>
          </Link>
        </div>
         </div>
         {/*오른쪽 카테고리영역*/}
        <div id={style.posts_container}>
         <div id={style.category_wrapper}>
          <MyPageCategory/>
        </div>

        <div id={style.posts_board}>
         <div id={style.component_wrapper}>
          {isFocus === 'post' ? 
          (<MyPosting/>):(null)}
          {isFocus === 'saying' ? 
          (<MySaying/>):(null)}
          {isFocus === 'comment' ? 
          (<MyComment/>):(null)}
          {isFocus === 'like' && isPost === true? 
          (<MyLikedPosting/>):(null)}
          {isFocus === 'like' && isPost === false? 
          (<MyLikedSaying/>):(null)}
         </div>
        </div>

         </div>
         </div> {/*유저컨테이너 + 포스팅 컨테이너 묶음*/}


         <div id={style.footer_wrapper}>
         <Footer/>
         </div>
        </div>
    )
}

export default MyPage;