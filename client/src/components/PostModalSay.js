import './PostModalSay.css';
import React, { useState } from 'react';
import PostSayModal from './PostSayModal';
import Modal from './Modal';

function PostModalSay(){
    let [isOpen,setIsOpen] = useState(false);
    return(
      <div className = 'post-modal-say' onClick={()=> {
        !isOpen
        ?setIsOpen(true)
        :setIsOpen(false)
       }}>
        {isOpen
          ?isOpen &&
          <Modal isOpenModal={isOpen} setIsOpen={setIsOpen}>
            <PostSayModal/>
          </Modal>
          :null  
        }
        명언 작성
      </div>
    )
}
export default PostModalSay;