/*****done*****/
import style from './PostMiniModal.module.css'
import PostModalPost from './PostModalPost';
import PostModalSay from './PostModalSay';
import React, {useState} from 'react';

function PostMiniModal(isOpen,setIsOpen){
  return(
    <div className={style.container} onClick = {()=>{setIsOpen(false)}}>
      <div className={style.box}>
        <div className={style.post}><PostModalPost/></div>
        <div className={style.say}><PostModalSay/></div>
      </div>
    </div>         
  )
}
export default PostMiniModal;