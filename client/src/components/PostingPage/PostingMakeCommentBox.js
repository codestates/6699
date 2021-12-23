import style from './PostingMakeCommentBox.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { REACT_APP_API_URL } from '../../config';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, getUserInfo } from '../../store/AuthSlice';


function PostingMakeCommentBox({ detectCommentPostBtn }){

  const { isLogin, userInfo } = useSelector((state) => state.auth);
  const userImage = userInfo.image;


  // store에서 관리하는 state
  const { sayingInfoCreatedArticle, createdArticleInfo } = useSelector(state => state.main);

  // 댓글 입력 state
  const [comment, setComment] = useState('')

  // 댓글 게시하기 버튼 handler
  const handleCommentPost = async () => {

    // [POST] Comment, 게시글 댓글 작성 
    // ~/sayingId/article/:articleId/comment
    const response = await axios.post(
      `${REACT_APP_API_URL}/${createdArticleInfo.saying_id}/article/${createdArticleInfo.id}/comment`,
      {
        content: comment
      },
      { withCredentials: true }
      )
      // 댓글 입력창을 다시 "댓글을 작성해주세요"로 바꾼다
      setComment('')
      // PostingPage에 detectCommentPostBtn 함수를 실행시킨다
      detectCommentPostBtn()
  }

  // 댓글 입력창 handler
  const handleComment = (e) => {
    setComment(e.target.value)
  }
  
 return (
  <div className={style.comment_writting_container}>
  <div id={style.writting_comment_border}>

    {/* 작성자 프로필 사진 */}
   {/* <div id={style.user_image}></div> */}
   <img
         id={style.user_profile_image}
         alt='defaultImage'
         src={`${REACT_APP_API_URL}/uploads/${userImage}`}/>
    {/* 댓글 작성란 */}
    <input 
      placeholder='댓글을 작성해주세요'
      value={comment}
      onChange={handleComment}>
    </input> 

  {/* 댓글 게시하기 버튼 */}
  </div>
  <button 
    id={style.make_comment}
    onClick={() => handleCommentPost()}>
      게시하기
  </button>
  </div>
 )
}

export default PostingMakeCommentBox;

