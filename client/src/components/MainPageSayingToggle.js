import './MainPageSayingToggle.css';
import React, { useState } from 'react';
import MainSayingMiniModal from './MainSayingMiniModal';
import Modal from './Modal';

function MainPageSayingToggle(){
  let [isOpen,setIsOpen] = useState(false);
  return(
    <div className = 'main-saying-toggle' onClick={()=> {
      !isOpen
      ?setIsOpen(true)
      :setIsOpen(false)
     }}>
      {isOpen
        ?isOpen &&
        <Modal isOpenModal={isOpen} setIsOpen={setIsOpen}>
          <MainSayingMiniModal/>
        </Modal>
        :null  
      }
    </div>
  )
}
export default MainPageSayingToggle;
