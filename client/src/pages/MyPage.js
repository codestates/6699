import MyPageCategory from '../components/MyPage/MyPageCategory.js';
import MyEditPage from './MyEditPage.js';
import {Routes, Route, Link} from 'react-router-dom';
import MyPosting from '../components/MyPage/MyPosting'
import MySaying from '../components/MyPage/MySaying'
import style from '../pages/MyPage.module.css'
import MyComment from '../components/MyPage/MyComment'
import MyLike from '../components/MyPage/MyLike'
import React, { useState } from 'react';
function MyPage(){
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
        <Link to ='/editpage'><button id={style.profile_setting}>프로필 설정</button></Link>
        <Link to ='/mainpage'><button id= {style.logout}>로그아웃</button></Link>
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