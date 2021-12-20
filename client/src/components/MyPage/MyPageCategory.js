import style from '../MyPage/MyPageCategory.module.css'
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
function MyPageCategory({isFocus,PostClickEvent,SayingClickEvent,LikeClickEvent,CommentClickEvent}){

  return (
    // -> 해당 카테고리탭을 누르면 탭배경색상이 노란색으로 고정되어있기
    <div className={style.container}>
      <ul className={style.bar}>
      <li className={style.menus} id={isFocus === 'mypost'?(style.focused_post):(style.post)}
      onClick={()=>PostClickEvent()}>
    나의 게시물
    </li>
     <li className={style.menus} id={isFocus === 'mysaying'?(style.focused_saying):(style.saying)}
      onClick={()=>SayingClickEvent()}>
     나의 명언
     </li>
     <li className={style.menus} id={isFocus === 'mycomment'?(style.focused_comment):(style.comment)}
      onClick={()=>CommentClickEvent()}>
       내가 쓴 댓글</li>
       <li className={style.menus} id={isFocus === 'mylike'?(style.focused_like):(style.like)}
      onClick={()=>LikeClickEvent()}>
       좋아요</li>
      </ul>
    </div>)
}
export default MyPageCategory;