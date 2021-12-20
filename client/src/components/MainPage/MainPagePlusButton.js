/*****done*****/
import style from './MainPagePlusButton.module.css';
import React, { useState } from 'react';
import PostMiniModal from './PostMiniModal';

function MainPagePlusButton(){
  let [isOpen,setIsOpen] = useState(false);
  return(
    <div className = {style.plus_button} onClick={()=> {
      !isOpen
      ?setIsOpen(true)
      :setIsOpen(false)
     }}>
     {isOpen&&<PostMiniModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      }
    </div>
  )
}
export default MainPagePlusButton;