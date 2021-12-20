import style from './MySayingMiniModal.module.css'

function MySayingMiniModal({MyPost,MySaying}){

    return(
        <div>
        <div className={style.box}>
          <div className={style.post} onClick={()=>MyPost()}>게시물</div>
          <div className={style.say} onClick={()=>MySaying()}>명언</div>
        </div>
      </div>    
    )
}
export default MySayingMiniModal;