import style from './DropaccountModal.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { logout, getUserInfo } from '../../store/AuthSlice'
import { useSelector, useDispatch } from 'react-redux';
import { REACT_APP_API_URL } from '../../config'

function DropaccountModal({ handleDropaccountModal }){

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 삭제하기 버튼 handler
  const handleDeleteBtn = async () => {
    try {
      const response = await axios.delete(
        `${REACT_APP_API_URL}/user/me`, 
        { withCredentials: true }
      )
      alert('𝟲𝟲𝟵𝟵\nGoodbye! 😖')
      // mainpage로 이동
      dispatch(logout());
      navigate('/mainpage');

    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className={style.container}
    onClick={() =>  handleDropaccountModal()}>

      <div className={style.modalbox}>

      <div className={style.logobox}>
        {/* 6699 로고 */}
        <Link to='/mainpage'><div id ={style.logoimage} onClick={() => handleDropaccountModal()}/></Link>
        </div>
      <div className={style.catimagebox}>
        <div id={style.catimage}/>
      </div>

        <div className={style.contentbox}>
            "1일 1식" 명언관 연관된     <br/>
            23개의 게시물이 사라져요.    <br/>
            정말 <b>삭제</b>하시겠어요...?     <br/>
        </div>

        <div className={style.anotherbox}>
          {/* 삭제하기 버튼 */}
          <div 
          className={style.deletebutton}
          onClick={() => handleDeleteBtn()}>
            삭제하기
          </div>
          
          {/* 유지하기 버튼 */}
          <Link to='/editpage'>
            <div 
            className={style.cancelbutton}
            onClick={() => handleDropaccountModal()}>
              유지하기
            </div>
            </Link>
        </div>
      </div>
    </div>
  )
}
export default DropaccountModal;