import style from '../MyPage/MyPageCategory.module.css'
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
function MyPageCategory({isFocus,PostClickEvent,SayingClickEvent,LikeClickEvent,CommentClickEvent}){
  
  function ChangeTab(){
  if(isFocus === 'mypost'){
    return <li className={style.menus} id={style.post} onClick={()=>PostClickEvent()}>
    나의 게시물
    </li>
  } else if(isFocus === 'mysaying'){
    return <li className={style.menus} id={style.saying} onClick={()=>SayingClickEvent()}>
    나의 명언
    </li>
  } else if(isFocus === 'mycomemnt'){
    return <li className={style.menus} id={style.comment} onClick={()=>LikeClickEvent()}>
      내가 쓴 댓글</li>
  } else if(isFocus === 'mylike'){
    return <li className={style.menus} id={style.like} onClick={()=>CommentClickEvent()}>
      좋아요</li>
  }
}

  return (
    // -> 해당 카테고리탭을 누르면 탭배경색상이 노란색으로 고정되어있기
    <div className={style.container}>
      <ul className={style.bar}>
       {ChangeTab()}
      </ul>
    </div>)
}
export default MyPageCategory;