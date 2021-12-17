import './PostPostModal.module.css';
import style from './PostPostModal.module.css';
function PostPostModal(){
  return (
    <div className={style.container}>
      <div className={style.modalbox}>
        <div className={style.image}/>
        <div className={style.category}/>

        <div className={style.contentbox}>
        <div className={style.titlebox}>
          <div className={style.title}>건강</div>
          <input type='text' className={style.input} placeholder={' 저질체력 탈출썰 푼다 ㅎㅎ'}/>
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