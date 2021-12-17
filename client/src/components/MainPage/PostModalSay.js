/*****done*****/
import style from './PostModalSay.module.css';
import React, { useState } from 'react';
import PostSayModal from './PostSayModal';
import {Link} from 'react-router-dom';
import Modal from '../Modal';

function PostModalSay(){
  let [isOpen,setIsOpen] = useState(false);
  return(
    <Link className={style.link} to ='/postsaymodal'><div className = {style.post} onClick={()=> 
      {
      <PostSayModal/>
      }
    }>
     명언 작성
    </div>
    </Link>
  )
}
export default PostModalSay;