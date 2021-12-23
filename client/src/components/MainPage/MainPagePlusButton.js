/*****done*****/
import style from './MainPagePlusButton.module.css';
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import PostMiniModal from './PostMiniModal';
import {showLoginModal} from  '../../store/ModalSlice';



function MainPagePlusButton(){
  const dispatch = useDispatch();
  let [isOpen,setIsOpen] = useState(false);
  const modalOff = () => {setIsOpen(false)}
  const isLogin = useSelector(state => state.auth.isLogin);
  return(
     <div>
        <div className = {style.plus_button} onClick={()=> {
          isOpen===false&&isLogin===true
          ?setIsOpen(true)
          :isOpen===true&&isLogin===true
          ?setIsOpen(false)
          :dispatch(showLoginModal(true))
           }}/>
          {isOpen&&isLogin
          ?<PostMiniModal modalOff = {modalOff}/>
          :null}
        </div>
      )
    }
export default MainPagePlusButton;