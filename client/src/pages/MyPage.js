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
    //상태 하나로 만들기. 중첩 너무많음
    const [postFocus,setPostFocus] = useState(true);
    const [sayingFocus,setSayingFocus] = useState(false);
    const [commentFocus,setCommentFocus] = useState(false);
    const [likeFocus,setLikeFocus] = useState(false);
    //나의 게시물 버튼을 눌렀을때 나의 게시물 component로 변함
    function PostClickEvent(){
      setPostFocus(true)
      setSayingFocus(false)
      setCommentFocus(false)
      setLikeFocus(false)
    }
    //나의 명언 버튼을 눌렀을때 나의 명언 component로 변함
    function SayingClickEvent(){
        setPostFocus(true)
        setSayingFocus(false)
        setCommentFocus(false)
        setLikeFocus(false)
      }
      //내가 쓴 댓글 버튼을 눌렀을때 내가 쓴 댓글 component로 변함
      function LikeClickEvent(){
        setPostFocus(true)
        setSayingFocus(false)
        setCommentFocus(false)
        setLikeFocus(false)
      }
      //좋아요 버튼을 눌렀을때 좋아요 component로 변함
      function CommentClickEvent(){
        setPostFocus(true)
        setSayingFocus(false)
        setCommentFocus(false)
        setLikeFocus(false)
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
        <MyPageCategory  postFocus={postFocus} commentFocus={commentFocus} 
        sayingFocus={sayingFocus} likeFocus={likeFocus}
        PostClickEvent={PostClickEvent} SayingClickEvent={SayingClickEvent}
        LikeClickEvent={LikeClickEvent} CommentClickEvent={CommentClickEvent}/>
        </div>

        <div id={style.posts_board}>
        <div id={style.component_wrapper}>
        {(postFocus === true)?(
        <MyPosting/>):(
            (sayingFocus === true)?
            (<MySaying/>):
            (commentFocus === true)?
            (<MyComment/>):
            (likeFocus === true)?(<MyLike/>):(null))}
    
        </div>
        </div>

        </div>
        </div>
    )
}

export default MyPage;