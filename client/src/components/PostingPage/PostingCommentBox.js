import style from './PostingCommentBox.module.css'
import Modal from '../Modal'
import axios from 'axios';
//import PostingMiniModal from '../../components/PostingPage/PostingMiniModal'
import { useState, useEffect } from 'react'
import { REACT_APP_API_URL } from '../../config';

import DeleteCommentModal from '../../components/MainPage/DeleteCommentModal.js';

function PostingCommentBox({  commentersImg, idx, commentInfo, sayingInfoCreatedArticle, createdArticleInfo }){

  console.log(" ^^^^^^^^^^^^^^^^^^ PostingCommentBox 진입확인 ^^^^^^^^^^^^^^^^^")

  const [imgChange, setImgChange] = useState(false)
  const [isDeleteComment, setIsDeleteComment] = useState(false)
  let [isOpen, setIsOpen] = useState(false);

  let defaultImg = 'porori.png'

  
  // 댓글 작성자의 이미지를 받아온다
  useEffect(async () => {

    // [GET]
    // 현재 댓글을 작성한 유저의 이미지 정보를 가져온다
    // ~/:sayingId/article/:articleId/comment/:commentId/:userId
    const response = await axios.get(
      `${REACT_APP_API_URL}/1/article/${commentInfo.article_id}/comment/${commentInfo.id}/1`,
      { withCredentials: true }
      )


      // userImage = response.data.data.userImage
      setImgChange(true)
  }, [])

  /// 댓글 삭제하기 버튼이 클릭되었을때, 
  const handleDropaccountModal = () => {
    setIsDeleteComment(!isDeleteComment)
  }

  /************* 게시글 작성 날짜 및 시간 (업데이트 기준) *******************/
  // 날짜
  let date = commentInfo.updatedAt.split('').slice(0, 10)
  let year = date.slice(2, 4).join('')
  let month = date.slice(5, 7).join('')
  let day = date.slice(8).join('')
  // 시간
  let time = commentInfo.updatedAt.split("").slice(11, 16).join('')
/***********************************************************************/

 

 return (
  <div className={style.posted_comment_container}>

      {isDeleteComment
        ? <DeleteCommentModal 
        handleDropaccountModal={handleDropaccountModal} 
        sayingInfoCreatedArticle={sayingInfoCreatedArticle} 
        createdArticleInfo={createdArticleInfo}
        commentInfo={commentInfo}/> 
        : null}

  <div id={style.comment_border}>
    {/* 작성자 프로필 사진 */}
   {/* <div id={style.user_image2}></div> */}
   { imgChange 
     ? <img
         id={style.user_profile_image}
         alt='defaultImage'
         src={`${REACT_APP_API_URL}/uploads/${defaultImg}`}/>
     : <img
         id={style.user_profile_image}
         alt='postImage'
         src={`${REACT_APP_API_URL}/uploads/${defaultImg}`}/>
         }

    {/* 댓글 내용 */}
   <p> {commentInfo.content} </p>
    
    {/* 삭제버튼 테스트 */}
    {/* <div 
        className = {style.setting_toggle} 
        onClick={() => {handleDropaccountModal()}}>
    </div> */}
    <button
    onClick={() => {handleDropaccountModal()}}>
      삭제 버튼 테스트!
    </button>

    {/* 댓글 수정 및 삭제 미니토글
   <div className = {style.saying_toggle} onClick={()=> {
      !isOpen
      ?setIsOpen(true)
      :setIsOpen(false)
     }}>
      {isOpen
        // ?isOpen &&
        ?
        <Modal isOpenModal={isOpen} setIsOpen={setIsOpen}>
          <PostingMiniModal/>
        </Modal>
        :null  
      }
    </div> */}

  </div>
  {/* 댓글 작성한 시간 */}
  <p id={style.comment_created_at}>{year}년{month}월{day}일 {time}</p>
  {/* 댓글 작성한 유저 닉네임 */}
  <p id={style.comment_user}>뱃살대장보노님</p>
  </div>
 )
}

export default PostingCommentBox;