import style from './MySayingMiniModal.module.css'

function MySayingMiniModal({MyPost,MySaying,getLikedSaying,getLikedArticle}){

    return(
        <div>
        <div className={style.box}>
          <div className={style.post}
          onClick={()=>{MyPost();
          getLikedArticle();}}>
            게시물
          </div>
          <div className={style.say} onClick={()=>{MySaying();
          getLikedSaying()}}>
            명언
          </div>
        </div>
      </div>    
    )
}
export default MySayingMiniModal;