import MyPageCategory from '../components/MyPage/MyPageCategory.js';
import MyEditPage from './MyEditPage.js';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import MyPosting from '../components/MyPage/MyPosting'
import MySaying from '../components/MyPage/MySaying'
import style from '../pages/MyPage.module.css'
import MyComment from '../components/MyPage/MyComment'
import MyLike from '../components/MyPage/MyLike'
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, getUserInfo } from '../store/AuthSlice'
import { REACT_APP_API_URL } from '../config';
function MyPage(){
  //유저 상태 변경 (로그인,로그아웃)
  //login이 true이고  MyPage에서 유저관련 모든 정보가 뜨고
  //로그아웃 버튼을 누르면 login이 false, logout이 true상태로 변한다.
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogin, userInfo } = useSelector((state) => state.auth);

  //현재 누르고 있는 탭
  const [isFocus,setIsFocus] = useState('mypost');

  //나의 게시물 버튼을 눌렀을때 나의 게시물 component로 변함
  function PostClickEvent(){
    setIsFocus('mypost')
  }
  //나의 명언 버튼을 눌렀을때 나의 명언 component로 변함
  function SayingClickEvent(){
    setIsFocus('mysaying')
    }
    //좋아요 버튼을 눌렀을때 좋아요 component로 변함
    function CommentClickEvent(){
      setIsFocus('mycomment')
    }
    //내가 쓴 댓글 버튼을 눌렀을때 내가 쓴 댓글 component로 변함
    function LikeClickEvent(){
      setIsFocus('mylike')
    }
    //카테고리 탭에 따라 컴포넌트 변경
    function ChangeComponent(){
      if(isFocus === 'mypost'){
        return <MyPosting/>
      } else if(isFocus === 'mysaying'){
        return <MySaying/>
      } else if(isFocus === 'mycomment'){
        return <MyComment/>
      } else if(isFocus === 'mylike'){
        return <MyLike/>
      }
    }

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
                <Route path='/editpage' element={<MyEditPage/>}></Route>
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
          <MyPageCategory  isFocus={isFocus}
        PostClickEvent={PostClickEvent} SayingClickEvent={SayingClickEvent}
        LikeClickEvent={LikeClickEvent} CommentClickEvent={CommentClickEvent}/>
        </div>

        <div id={style.posts_board}>
         <div id={style.component_wrapper}>
          {ChangeComponent()}
         </div>
        </div>

         </div>
        </div>
    )
}

export default MyPage;