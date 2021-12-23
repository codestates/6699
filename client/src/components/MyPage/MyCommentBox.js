import style from './MyCommentBox.module.css'
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { setSayingIdforCreatedArticle, setCreatedArticleId, getCreatedArticleInfo, 
  getSayingInfoCreatedArticle,getTotalComment,getImageInfo }from '../../store/MainSlice';
import axios from 'axios';
import { REACT_APP_API_URL } from '../../config';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'

function MyCommentBox({comments,loading}){
    /********* 게시물 페이지로 갈 때 필요한 3요소 입니다 ************/
  const { focusedSayingId, sayingInfoCreatedArticle, createdArticleInfo} = useSelector(state => state.main);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const MoveToArticle = async (comment) => {
  //       //특정 게시물 조회
  //      const res = await axios.get(
  //     `${REACT_APP_API_URL}/${comment.saying_id}/article/${comment.id}`,
  //     {withCredentials: true}
  //   )
  //   console.log(res.data)
  //   navigate('/postingpage');
  //   }

  //   if(loading){
  //     return <h2>loading...</h2>
  //   }
const MoveToArticle = async (comment) => {
  // console.log(comment)

  const response = await axios.get(`${REACT_APP_API_URL}/${comment.saying_id}/article/${comment.id}`, 
    { withCredentials: true }
    );
// console.log(response.data.data.articleInfo)
    dispatch(getCreatedArticleInfo(response.data.data.articleInfo));

    const sayingInfo = await axios.get(`${REACT_APP_API_URL}/${comment.saying_id}`)
    // 현재 선택된 명언Id를 기반으로, 게시글 페이지에서 사용할 수 있게 명언 정보를 저장한다
    dispatch(getSayingInfoCreatedArticle({
      id: sayingInfo.data.data.filteredSaying.id,
      content: sayingInfo.data.data.filteredSaying.content,
      category: sayingInfo.data.data.filteredSaying.category,
      total_like: sayingInfo.data.data.filteredSaying.total_like,
      createdAt: sayingInfo.data.data.filteredSaying.createdAt,
      updatedAt: sayingInfo.data.data.filteredSaying.updatedAt
    }));
    /*****************  명언  ********************/
    /*****************  댓글  ********************/

  //   [GET] 게시글 댓글 조회
  // ~/:sayingId/article/:articleId/comment
  // response2 변수에 서버 응답결과를 담는다
  const response2 = await axios.get(
    `${REACT_APP_API_URL}/${comment.saying_id}/article/${comment.id}/comment`,
    { withCredentials: true }
    )
    console.log("댓글정보 확인!!!:", response2.data.data)
    // 댓글이 있을때,
    if(response2.data.data) {
      dispatch(getTotalComment(response2.data.data.commentInfo));
    } else {
      dispatch(getTotalComment([]));
    }

    /*****************  댓글  ********************/


    // 해당 게시글 페이지로 이동한다
    navigate('/postingpage');
    
}

    return (
      <div id={style.comment_wrap}>
      {comments.map(comment => (
         <li key ={comment.id} className={style.saying}
         onClick={() => MoveToArticle(comment)}>
           {/*comment는 category가 없음*/}
           <img className={style.image} src = {`${REACT_APP_API_URL}/upload/talktalk.png`}>
           </img>
          <div id={style.trashcan}>
           </div>
    
           <div id={style.set_title_middle_box}>
        <div className={style.title}>
        <div id={style.icon_66}></div>
        <p id={style.saying}>{comment.title}</p>
        <div id={style.icon_99}></div>
        </div>
        </div>
    
          <div className={style.icon_box}>
          <div id={style.heart}></div>
          <div id={style.post}></div>
         </div>
         </li>
      ))}
      </div>
    )
}
export default MyCommentBox;