import style from  './PostModalPost.module.css';
import React, { useState } from 'react';
import PostPostModal from './PostPostModal';
import {Link} from 'react-router-dom'
import Modal from '../Modal';

function PostModalPost(){
    let [isOpen,setIsOpen] = useState(false);
    return(
      <Link className={style.link} to ='/mainpage/postpostmodal'><div className = {style.post}>
       글 작성
      </div>
      </Link>
    )
}
export default PostModalPost;








