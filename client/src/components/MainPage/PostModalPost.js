import style from  './PostModalPost.module.css';
import React, { useState } from 'react';
import PostPostModal from './PostPostModal';
import {Link} from 'react-router-dom'
import Modal from '../Modal';

// function PostModalSay(){
//     let [isOpen,setIsOpen] = useState(false);
//     return(
//       <div className = 'post-modal-post' onClick={()=> {
//         console.log(isOpen);
//         !isOpen
//         ?setIsOpen(true)
//         :setIsOpen(false)
//        }}>
//         {!isOpen
//           ?isOpen &&
//           <Modal isOpenModal={isOpen} setIsOpen={setIsOpen}>
//             <PostPostModal/>
//           </Modal>
//           :null  
//         }
//        글 작성
//       </div>
//     )
// }
// export default PostModalSay;



function PostModalPost(){
    let [isOpen,setIsOpen] = useState(false);
    return(
      <Link className={style.link} to ='/postpostmodal'><div className = {style.post} onClick={()=> 
        {
        <PostPostModal/>
        }
      }>
       글 작성
      </div>
      </Link>
    )
}
export default PostModalPost;








