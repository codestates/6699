import style from './MySayingMiniModal.module.css'

function MySayingMiniModal(){
  return(
    <div>
    <div className={style.box}>
      <div className={style.post}
      onClick={()=>console.log('확인') }>
        게시물
      </div>
      <div className={style.say} onClick={()=> console.log('gg')}>
        명언
      </div>
    </div>
  </div> 
  )
}

export default MySayingMiniModal;