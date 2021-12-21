import MyPageCategory from '../components/MyPage/MyPageCategory.js';
import MyEditPage from './MyEditPage.js';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import MyPosting from '../components/MyPage/MyPosting'
import MySaying from '../components/MyPage/MySaying'
import style from '../pages/MyPage.module.css'
import MyComment from '../components/MyPage/MyComment'
import MyLike from '../components/MyPage/MyLike'
import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, getUserInfo } from '../store/AuthSlice'
import { REACT_APP_API_URL } from '../config';
import axios from 'axios';
import{setArticles,setSayings,setComments,setLikedSayings,setLikedArticle} from '../store/MySlice'

function MyPage(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFocus } = useSelector((state) => state.mypage)

//  function handleSayingClick(){
//   getSaying()
//  }

 function handleCommentsClick(){
  getComments()
 }

 function handleLikedSayingClick(){
  getLikedSaying()
 }

 function handleLikedArticleClick(){
  getLikedArticle()
 }


// const getSaying = async () => {
//   try {
//     const response = await axios.get(
//       `${REACT_APP_API_URL}/user/mysaying`,
//       { withCredentials: true }
//     );
//     if(Array.isArray(response.data.data.filteredSaying)){
//       dispatch(setSayings(response.data.data.filteredSaying));
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

const getComments = async () => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/user/mycomment`,
    {withCredentials:true}
    );
    if(Array.isArray(response.data.data.filteredArticle)){
    dispatch(setComments(response.data.data.filteredArticle));
    }
  } catch (err) {
    console.log(err);
  }
};

const getLikedSaying = async () => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/user/mylike/?category=saying`,
      { withCredentials: true }
    );
    if(Array.isArray(response.data.data.filteredLike)){
    dispatch(setLikedSayings(response.data.data.filteredLike))
    }
  } catch (err) {
    console.log(err);
  }
};

const getLikedArticle = async () => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/user/mylike/?category=article`,
      { withCredentials: true }
      );
      if(Array.isArray(response.data.data.filteredArticle)){
    dispatch(setLikedArticle(response.data.data.filteredLike));
      }
  } catch (err) {
    console.log(err);
  }
};
    
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
          <MyPageCategory
            // handleSayingClick={handleSayingClick}
            handleCommentsClick={handleCommentsClick}
           />
        </div>

        <div id={style.posts_board}>
         <div id={style.component_wrapper}>
          {isFocus === 'post' ? 
          (<MyPosting/>):(null)}
          {isFocus === 'saying' ? 
          (<MySaying/>):(null)}
          {isFocus === 'comment' ? 
          (<MyComment/>):(null)}
          {isFocus === 'like' ? 
          (<MyLike 
            handleLikedArticleClick={handleLikedArticleClick}
            handleLikedSayingClick={handleLikedSayingClick}
          />):(null)}
         </div>
        </div>

         </div>
        </div>
    )
}

export default MyPage;