import './MainPagePlusButton.css';
import React, { useState } from 'react';
import PostMiniModal from './PostMiniModal';
import Modal from './Modal';


function MainPagePlusButton(){
  let [isOpen,setIsOpen] = useState(false);
  return(
    <div className = 'post-plus' onClick={()=> {
      !isOpen
      ?setIsOpen(true)
      :setIsOpen(false)
     }}>
      {isOpen
        ?isOpen &&
        <Modal isOpenModal={isOpen} setIsOpen={setIsOpen}>
          <PostMiniModal/>
        </Modal>
        :null  
      }
    </div>
  )
}
export default MainPagePlusButton;