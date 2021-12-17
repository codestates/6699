/*****done*****/
import style from './MainSayingMiniModal.module.css'
function MainSayingMiniModal(){
  return(
    <div>
      <div className={style.modal_box}>
        <div className={style.modal_post}>좋아요순</div>
        <div className={style.modal_say}>최신순</div>
      </div>
    </div>         
  )
}
export default MainSayingMiniModal;