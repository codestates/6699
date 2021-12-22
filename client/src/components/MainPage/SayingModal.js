import style from './SayingModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { showSayingModal,showSayingCategoryModal } from '../../store/ModalSlice';
import { setCategory } from '../../store/MainSlice';

function SayingModal(){
  const nowCategory = useSelector(state => state.main.nowCategory);
  const getCategory = (category) => dispatch(setCategory(category))
  const dispatch = useDispatch();
  const modalOff = (off) => {showSayingModal(off)
                             getCategory('전체')}
  return (
    <div className={style.container}>
    <div className={style.modalbox_bg} onClick={() => dispatch(showSayingModal(false))}/>
      <div className={style.modalbox}>
        <div className={style.image}/>

        <div className={style.contentbox}>
        <div className={style.titlebox}>
          <div className={style.name}>꼬부기</div>
          <div className={style.category} onClick={() => dispatch(showSayingCategoryModal(true))}>{nowCategory}</div>
          <div className={style.category_toggle} onClick={() => dispatch(showSayingCategoryModal(true))}/>
        </div>
        <input type='text' className={style.writebox}/>

        <div className={style.anotherbox}>
          <div className={style.writebutton}>작성하기</div>
          <div className={style.link} onClick={() => dispatch(showSayingModal(false))}><div className={style.cancelbutton}>취소</div></div>
        </div>
      </div>
      </div>
    </div>

  )
}
export default SayingModal;