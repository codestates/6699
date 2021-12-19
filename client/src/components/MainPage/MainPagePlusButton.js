/*****done*****/
import style from './MainPagePlusButton.module.css';
import React, { useState } from 'react';
import PostMiniModal from './PostMiniModal';
import Modal from '../Modal';

function MainPagePlusButton(){
  let [isOpen,setIsOpen] = useState(false);
  return(
    <div className = {style.plus_button} onClick={()=> {
      !isOpen
      ?setIsOpen(true)
      :setIsOpen(false)
     }}>
     {isOpen&&
      <Modal isOpenModal={isOpen} setIsOpen={setIsOpen}>
        <PostMiniModal/>
      </Modal>
      }
    </div>
  )
}
export default MainPagePlusButton;