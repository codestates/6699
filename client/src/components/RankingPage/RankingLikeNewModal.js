import style from './RankingLikeNewModal.module.css'
function RankingLikeNewModal({toggleOff, clickLike, clickNew}){
  return(
    <div>
      <div className={style.box_bg } onClick ={toggleOff}/>  
      <div className={style.box}>
        <div className={style.like} onClick={clickLike}>좋아요순 </div>
        <div className={style.new}  onClick={clickNew}>최신순</div>
      </div>
    </div>         
  )
}
export default RankingLikeNewModal;