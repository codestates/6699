import style from './MySayingMiniModal.module.css'
function MySayingMiniModal(){
    return(
        <div>
        <div className={style.box}>
          <div className={style.post}>게시물</div>
          <div className={style.say}>명언</div>
        </div>
      </div>    
    )
}
export default MySayingMiniModal;