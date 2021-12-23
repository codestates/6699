import { showSayingCategoryModal } from '../../store/ModalSlice';
import { setCategory } from '../../store/MainSlice';
import { useSelector,useDispatch } from 'react-redux';
import style from './SayingCategoryModal.module.css';


function SayingCategoryModal(){
  const nowCategory = useSelector(state => state.main.nowCategory);
  const dispatch = useDispatch();
  const getCategory = (category) => {dispatch(setCategory(category))
                                      dispatch(showSayingCategoryModal(false))
                                    }

  return (
    <div id={style.container}>
      <div className={style.box_bg} onClick={()=> dispatch(showSayingCategoryModal(false))}/>
      <div className={style.box}>
        <div className={style.health} onClick={()=>getCategory('건강')}>건강</div>
        <div className={style.study} onClick={()=>getCategory('학습')}>학습</div>
        <div className={style.economy} onClick={()=>getCategory('경제')}>경제</div>
        <div className={style.relationship} onClick={()=>getCategory('인간관계')}>인간관계</div>
        <div className={style.love} onClick={()=>getCategory('사랑')}>사랑</div>
      </div>
    </div>
  )
}
export default SayingCategoryModal;