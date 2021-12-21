import style from '../MyPage/MyPageCategory.module.css'
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setIsFocus} from '../../store/MySlice'

function MyPageCategory({handleSayingClick,handleCommentsClick,handleLikedArticleClick}){
const dispatch = useDispatch();
  //나의 명언 받아오는 요청
const [isSelected,setIsSelected] = useState('post')
const { isFocus } = useSelector((state) => state.mypage);

function PostClickEvent(){
  setIsSelected('post')
  dispatch(setIsFocus('post'));
}
function SayingClickEvent(){
  setIsSelected('saying')
  dispatch(setIsFocus('saying'));
}
function CommentClickEvent(){
  setIsSelected('comment')
  dispatch(setIsFocus('comment'));
}
function LikeClickEvent(){
  setIsSelected('like')
  dispatch(setIsFocus('like'));
}

  return (
    // -> 해당 카테고리탭을 누르면 탭배경색상이 노란색으로 고정되어있기
    <div className={style.container}>
      <ul className={style.bar}>
       <li className={style.menus} id={isSelected === 'post'?(style.focused_post):(style.post)}
        onClick={()=>PostClickEvent()}>
        나의 게시물
       </li>
       <li className={style.menus} id={isSelected === 'saying'?(style.focused_saying):(style.saying)}
        onClick={()=>{SayingClickEvent();
          handleSayingClick()}}>
        나의 명언
       </li>
       <li className={style.menus} id={isSelected === 'comment'?(style.focused_comment):(style.comment)}
        onClick={()=>{CommentClickEvent()
        handleCommentsClick()}}>
         내가 쓴 댓글
      </li>
       <li className={style.menus} id={isSelected === 'like'?(style.focused_like):(style.like)}
        onClick={()=>{LikeClickEvent()
        handleLikedArticleClick()}}>
         좋아요
       </li>
      </ul>
    </div>)
}
export default MyPageCategory;