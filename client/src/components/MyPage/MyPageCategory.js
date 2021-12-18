import style from '../MyPage/MyPageCategory.module.css'
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
function MyPageCategory({sayingFocus,likeFocus,commentFocus,postFocus,clickEvent}){

  return (
    <div className={style.container}>
      <ul className={style.bar}>
        <li className={style.menus}>
          <Link className={style.menus} id={style.post} to='/mypage'>
            나의 게시물
            </Link>
            </li> 
        <li className={style.menus} id={style.saying} focused={isFocus} onClick={clickEvent}>
            나의 명언
            </li>  
        <li className={style.menus} id={style.comment} focused={isFocus}>내가 쓴 댓글</li>
        <li className={style.menus} id={style.like} focused={isFocus}>좋아요</li>
      </ul>
    </div>
  )
}
export default MyPageCategory;