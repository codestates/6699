import style from './MySayingMiniModal.module.css'

function MySayingMiniModal({MyPost,MySaying,handleLikedSayingClick,handleLikedArticleClick}){

    return(
        <div>
        <div className={style.box}>
          <div className={style.post}
          onClick={()=>{MyPost();
          handleLikedArticleClick()}}>
            게시물
          </div>
          <div className={style.say} onClick={()=>{MySaying();
          handleLikedSayingClick()}}>
            명언
          </div>
        </div>
      </div>    
    )
}
export default MySayingMiniModal;