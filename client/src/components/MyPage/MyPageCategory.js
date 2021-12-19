import style from '../MyPage/MyPageCategory.module.css'
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
function MyPageCategory({postFocus,sayingFocus,commentFocus,LikeFocus,
PostClickEvent,SayingClickEvent,LikeClickEvent,CommentClickEvent}){

  return (
    // -> 나의 게시물부분을 누르면 버튼배경색상이 노란색으로 고정되어있기
    //왜 MyPageCategoryPost만쓰면 페이지가 하얘질까....^^
    (postFocus === true)?(
    <div className={style.container}>
      <ul className={style.bar}>
        <li className={style.menus}>
          <Link className={style.menus} id={style.post} to='/mypage'>
            나의 게시물
            </Link>
            </li> 

        <li className={style.menus} id={style.saying}  onClick={PostClickEvent}>
            나의 명언
        </li>  
        <li className={style.menus} id={style.comment} >내가 쓴 댓글</li>
        <li className={style.menus} id={style.like} >좋아요</li>
      </ul>
    </div>):( // -> 나의 게시물부분이 눌려있지 않으면 버튼배경색상이 노란색으로 고정되어있기
       (sayingFocus === true)?(
      <div className={style.container}>
      <ul className={style.bar}>
        <li className={style.menus}>
          <Link className={style.menus} id={style.clicked_post} to='/mypage'>
            나의 게시물
            </Link>
            </li> 
        <li className={style.menus} id={style.saying}  onClick={SayingClickEvent}>
            나의 명언
            </li>  
        <li className={style.menus} id={style.comment} >내가 쓴 댓글</li>
        <li className={style.menus} id={style.like} >좋아요</li>
      </ul>
    </div>) :(
      (commentFocus === true)?(
        <div className={style.container}>
        <ul className={style.bar}>
          <li className={style.menus}>
            <Link className={style.menus} id={style.clicked_post} to='/mypage'>
              나의 게시물
              </Link>
              </li> 
          <li className={style.menus} id={style.saying}  onClick={SayingClickEvent}>
              나의 명언
              </li>  
          <li className={style.menus} id={style.comment} >내가 쓴 댓글</li>
          <li className={style.menus} id={style.like} >좋아요</li>
        </ul>
      </div>) : (
        (LikeFocus === true)?(
          <div className={style.container}>
          <ul className={style.bar}>
            <li className={style.menus}>
              <Link className={style.menus} id={style.clicked_post} to='/mypage'>
                나의 게시물
                </Link>
                </li> 
            <li className={style.menus} id={style.saying}  onClick={SayingClickEvent}>
                나의 명언
                </li>  
            <li className={style.menus} id={style.comment} >내가 쓴 댓글</li>
            <li className={style.menus} id={style.like} >좋아요</li>
          </ul>
        </div>
        ):(null))
      )
    )
  )
}
export default MyPageCategory;
