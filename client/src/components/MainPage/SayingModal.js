import style from './SayingModal.module.css';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showSayingModal } from '../../store/ModalSlice';
function SayingModal(){
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      
    <Link  className={style.link} to ='/mainpage' onClick={() => dispatch(showSayingModal(false))}><div className={style.modalbox_bg}/></Link>
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
          <Link className={style.link} to ='/mainpage' onClick={() => dispatch(showSayingModal(false))}><div className={style.cancelbutton}>취소</div></Link>
        </div>
      </div>
      </div>
    </div>

  )
}
export default SayingModal;