/*****done*****/
import style from './MainPagePlusButton.module.css';
import React, { useState } from 'react';
import PostMiniModal from './PostMiniModal';

function MainPagePlusButton(){

  let [isOpen,setIsOpen] = useState(false);
  const modalOff = () => {setIsOpen(false)}
  return(
    <div>
      <div className = {style.plus_button} onClick={()=> {
        !isOpen
        ?setIsOpen(true)
        :setIsOpen(false)
       }}/>

      {isOpen&&<PostMiniModal modalOff = {modalOff}/>}
    </div>
  )
}
export default MainPagePlusButton;