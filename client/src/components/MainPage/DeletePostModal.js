import style from './DeletePostModal.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { logout, getUserInfo } from '../../store/AuthSlice'
import { useSelector, useDispatch } from 'react-redux';
import { REACT_APP_API_URL } from '../../config'


function DeletePostModal({ handleDropaccountModal, sayingInfoCreatedArticle, createdArticleInfo}){

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("sayingInfoCreatedArticle", sayingInfoCreatedArticle)
  console.log("createdArticleInfo", createdArticleInfo)

  const sayingId = sayingInfoCreatedArticle.id
  const articleId = createdArticleInfo.id

  // 삭제하기 버튼 handler
  const handleDeleteBtn = async () => {
    try {
      // [DELETE] 특정 게시물 삭제
      // ~/:sayingId/article/:articleId
      const response = await axios.delete(
        `${REACT_APP_API_URL}/${sayingId}/article/${articleId}`, 
        { withCredentials: true }
      )
      alert('𝟲𝟲𝟵𝟵\n게시물이 삭제되었습니다! 😖')
      
      // dispatch(logout());

      // mainpage로 이동
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
            정말 <b>삭제</b>하시겠어요?     <br/>
        </div>

        <div className={style.anotherbox}>
          {/* 삭제하기 버튼 */}
          <div 
          className={style.deletebutton}
          onClick={() => handleDeleteBtn()}>
            삭제하기
          </div>
          
          {/* 유지하기 버튼 */}
          
            <div 
            className={style.cancelbutton}
            onClick={() => handleDropaccountModal()}>
              유지하기
            </div>
            
        </div>
      </div>
    </div>
  )
}
export default DeletePostModal;