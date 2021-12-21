import style from './PostingMiniModal.module.css'

function PostingMiniModal(){
  return (
    <div>
    <div className={style.box}>
      <div className={style.post}>
        수정하기
      </div>
      <div className={style.say}>
        삭제하기
      </div>
    </div>
  </div>    
  )
}

export default PostingMiniModal;

    

