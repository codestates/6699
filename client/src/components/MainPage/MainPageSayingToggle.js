/*****done*****/
import style from './MainPageSayingToggle.module.css';
import React, { useState } from 'react';
import MainSayingMiniModal from './MainSayingMiniModal';
import Modal from '../Modal';

function MainPageSayingToggle(){
  let [isOpen,setIsOpen] = useState(false);
  return(
    <div className = {style.toggle} onClick={()=> {
      !isOpen
      ?setIsOpen(true)
      :setIsOpen(false)
     }}>
      {isOpen&&
        <Modal isOpenModal={isOpen} setIsOpen={setIsOpen}>
          <MainSayingMiniModal/>
        </Modal>  
      }
    </div>
  )
}
export default MainPageSayingToggle;
