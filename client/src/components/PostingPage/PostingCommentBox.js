import style from './PostingCommentBox.module.css'
import Modal from '../Modal'
import axios from 'axios';
import PostingMiniModal from '../../components/PostingPage/PostingMiniModal'
import { useState, useEffect } from 'react'
import { REACT_APP_API_URL } from '../../config';

function PostingCommentBox({ commentInfo }){
  
  // 댓글 작성자의 이미지를 받아온다
  // useEffect(async () => {

  //   // [GET]
  //   // ~/:sayingId/article/:articleId/comment/:userId
  //   const response = await axios.get(
  //     `${REACT_APP_API_URL}/1/article/${commentInfo.article_id}/comment/${user_id}`,
  //     { withCredentials: true }
  //     )

  //     console.log("response 확인:", response)


  // }, [])

  console.log("진짜 이것만 하면 끝이얌!!! PostinComment Box commentInfo:", commentInfo)

  /************* 게시글 작성 날짜 및 시간 (업데이트 기준) *******************/
  // 날짜
  let date = commentInfo.updatedAt.split('').slice(0, 10)
  let year = date.slice(2, 4).join('')
  let month = date.slice(5, 7).join('')
  let day = date.slice(8).join('')
  // 시간
  let time = commentInfo.updatedAt.split("").slice(11, 16).join('')
/***********************************************************************/

  let [isOpen, setIsOpen] = useState(false);

 return (
  <div className={style.posted_comment_container}>
  <div id={style.comment_border}>
    {/* 작성자 프로필 사진 */}
   {/* <div id={style.user_image2}></div> */}
   {/* <img
        id={style.user_profile_image}
        alt='postImage'
        src={`${REACT_APP_API_URL}/uploads/${userInfo.image}`}/> */}
    {/* 댓글 내용 */}
   <p> {commentInfo.content} </p>
    {/* 댓글 수정 및 삭제 미니토글 */}
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
    </div>
  </div>
  {/* 댓글 작성한 시간 */}
  <p id={style.comment_created_at}>{year}년{month}월{day}일 {time}</p>
  {/* 댓글 작성한 유저 닉네임 */}
  <p id={style.comment_user}>뱃살대장보노님</p>
  </div>
 )
}

export default PostingCommentBox;