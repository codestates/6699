import style from './PostingCommentBox.module.css'
import Modal from '../Modal'
import PostingMiniModal from '../../components/PostingPage/PostingMiniModal'
import {useState} from 'react'

function PostingCommentBox(){
  let [isOpen,setIsOpen] = useState(false);

 return (
  <div className={style.posted_comment_container}>
  <div id={style.comment_border}>
   <div id={style.user_image2}></div>
   <p>나도 살빼야되는데ㅜ<br/>눈팅 그만하고싶어여</p>
   <div className = {style.saying_toggle} onClick={()=> {
      !isOpen
      ?setIsOpen(true)
      :setIsOpen(false)
     }}>
      {isOpen
        ?isOpen &&
        <Modal isOpenModal={isOpen} setIsOpen={setIsOpen}>
          <PostingMiniModal/>
        </Modal>
        :null  
      }
    </div>
  </div>
  <p id={style.comment_created_at}>30분전</p>
  <p id={style.comment_user}>뱃살대장보노님</p>
  </div>
 )
}

export default PostingCommentBox;