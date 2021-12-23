import style from './DeleteCommentModal.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { logout, getUserInfo } from '../../store/AuthSlice'
import { useSelector, useDispatch } from 'react-redux';
import { REACT_APP_API_URL } from '../../config'
import { getTotalComment } from '../../store/MainSlice'


function DeleteCommentModal({ handleDropaccountModal, sayingInfoCreatedArticle, createdArticleInfo, commentInfo })
{
  console.log(" ----------------- DeleteCommentModal 진입확인 ---------------------- ")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { totalComment } = useSelector(state => state.main);

  console.log("sayingInfoCreatedArticle 댓글삭제모달", sayingInfoCreatedArticle)
  console.log("createdArticleInfo 댓글삭제모달", createdArticleInfo)
  console.log("commentInfo 댓글삭제모달", commentInfo)
  console.log("totalComment 댓글삭제모달", totalComment)

  const sayingId = sayingInfoCreatedArticle.id
  const articleId = createdArticleInfo.id
  const commentId = commentInfo.id

  // 삭제하기 버튼 handler
  const handleDeleteBtn = async () => {
    try {
      // [DELETE] 특정 게시글 댓글 삭제
      // ~/:sayingId/article/:articleId/comment/:commentId
      const response = await axios.delete(
        `${REACT_APP_API_URL}/${sayingId}/article/${articleId}/comment/${commentId}`, 
        { withCredentials: true }
      )

      console.log("DeleteCommentModal handleDeleteBtn 1차 axios")

      // Comment가 삭제된 후, 모든 댓글을 DB로부터 받아온다
      // [GET] 게시글 댓글 조회
      // ~sayingId/article/:articleId/comment
      const updatedTotalComment = await axios.get(
        `${REACT_APP_API_URL}/${sayingId}/article/${articleId}/comment`, 
        { withCredentials: true }
      )

      console.log("DeleteCommentModal handleDeleteBtn 2차 axios")
      console.log("DeleteCommentModal updatedTotalComment.data.data.commentInfo 확인", updatedTotalComment.data.data)
      
      // 댓글이 다 삭제된 경우, 빈배열로 store에 totalComment를 업데이트
      if(!updatedTotalComment.data.data) dispatch(getTotalComment([]));
      // 댓글이 존재하는 경우, 삭제된 이후의 상태를 stroe에 totalComment를 업데이트
      else dispatch(getTotalComment(updatedTotalComment.data.data.commentInfo));

      
      alert('𝟲𝟲𝟵𝟵\n댓글이 삭제되었습니다! 😖')
      // 해당 게시물로 이동
      handleDropaccountModal()
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
export default DeleteCommentModal;
