import style from './MySayingMiniModal.module.css'
import {useSelector, useDispatch} from 'react-redux';
import {setIsPost} from '../../store/MySlice'

function MySayingMiniModal(){
  const dispatch = useDispatch();

  return(
    <div>
    <div className={style.box}>
      <div className={style.post} onClick={()=> dispatch(setIsPost(true))}>
        게시물
      </div>
      <div className={style.say}>
        명언
      </div>
    </div>
  </div> 
  )
}

export default MySayingMiniModal;