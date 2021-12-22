import style from './MyCommentBox.module.css'
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function MyCommentBox({comments,loading}){

    if(loading){
      return <h2>loading...</h2>
    }

    return (
      <div id={style.comment_wrap}>
      {comments.map(saying => (
         <li key ={saying.id} className={style.saying}>
           <div className={style.category_image}></div>
           <div id={style.trashcan}></div>
    
           <div id={style.set_title_middle_box}>
        <div className={style.title}>
        <div id={style.icon_66}></div>
        <p id={style.saying}>{saying.content}</p>
        <div id={style.icon_99}></div>
        </div>
        </div>
    
          <div className={style.icon_box}>
          <div id={style.heart}></div>
          <div id={style.post}></div>
         </div>
         </li>
      ))}
      </div>
    )
}
export default MyCommentBox;