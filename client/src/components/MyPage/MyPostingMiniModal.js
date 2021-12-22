import style from './MyPostingMiniModal.module.css'
import {useSelector, useDispatch} from 'react-redux';
import {setIsPost} from '../../store/MySlice'

function MyPostingMiniModal(){
const dispatch = useDispatch();

    return(
        <div>
        <div className={style.box}>
          <div className={style.post}>
            게시물
          </div>
          <div className={style.say} onClick={dispatch(setIsPost(false))}>
            명언
          </div>
        </div>
      </div>    
    )
}
export default MyPostingMiniModal;