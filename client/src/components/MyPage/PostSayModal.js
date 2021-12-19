import style from './PostSayModal.module.css';
function PostPostModal(){
  return (
    <div className={style.container}>
      <div className={style.modalbox}>
        <div className={style.image}/>

        <div className={style.contentbox}>
        <div className={style.titlebox}>
          <div className={style.name}>꼬부기</div>
          <div className={style.category}>카테고리</div>
          <div className={style.category_toggle}/>
        </div>
        <input type='text' className={style.writebox}/>

        <div className={style.anotherbox}>
          <div className={style.writebutton}>작성하기</div>
          <div className={style.cancelbutton}>취소</div>
        </div>
      </div>
      </div>
    </div>
  )
}
export default PostPostModal;