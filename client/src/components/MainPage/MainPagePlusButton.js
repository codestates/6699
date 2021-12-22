/*****done*****/
import style from './MainPagePlusButton.module.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PostMiniModal from './PostMiniModal';
import { login } from '../../store/AuthSlice';

function MainPagePlusButton(){
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
          :alert('𝟲𝟲𝟵𝟵\n로그인 먼저 해주세요! 😖')
           }}/>
          {isOpen&&isLogin
          ?<PostMiniModal modalOff = {modalOff}/>
          :null}
        </div>
      )
    }
export default MainPagePlusButton;