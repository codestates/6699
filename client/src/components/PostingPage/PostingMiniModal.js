import style from './PostingMiniModal.module.css'
import DropaccountModal from '../../components/MyPage/DropaccountModal.js';
import { useState, useEffect } from 'react'

function PostingMiniModal(){

  // 고양이 삭제 모달 state
  const [DeletePostModalState, SetDeletePostModalState] = useState(false)

  const handleDropaccountModal = () => {

    console.log("게시물 미니 모달! - 삭제하기 버튼 클릭")

    SetDeletePostModalState(true)
    console.log(DeletePostModalState)

    console.log("엄청나네!!!")
  }

  return (
    
    <div>
      {DeletePostModalState ? <DropaccountModal handleDropaccountModal={handleDropaccountModal}/> : null}
    <div className={style.box}>
      <div className={style.post}>
        수정하기
      </div>
      <div 
        className={style.say}
        onClick={() => {handleDropaccountModal()}}>
        삭제하기
      </div>
    </div>
  </div>    
  )
}

export default PostingMiniModal;

    

