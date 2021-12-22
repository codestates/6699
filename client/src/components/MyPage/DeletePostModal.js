import style from './DeletePostModal.module.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function DeletePostModal(){
  return (
    <div className={style.container} >
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
          <div>
            삭제하기
          </div>
            <div >
              유지하기
            </div>
        </div>
      </div>
    </div>
  )
}

export default DeletePostModal;