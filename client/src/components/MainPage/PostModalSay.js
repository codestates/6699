/*****done*****/
import style from './PostModalSay.module.css';
import React, { useState } from 'react';
import PostSayModal from './PostSayModal';
import Modal from '../Modal';

function PostModalSay(){
    let [isOpen,setIsOpen] = useState(false);
    return(
      <div className = {style.modal_say} onClick={()=> {
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