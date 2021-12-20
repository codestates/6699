/*****done*****/
import style from './PostModalSay.module.css';
import { showSayingModal } from '../../store/ModalSlice';
import { useSelector,useDispatch } from 'react-redux';

function PostModalSay(){
  const dispatch = useDispatch();
  return(
    <div className = {style.post} onClick={()=> dispatch(showSayingModal(true))}>
     명언 작성
    </div>
  )
}
export default PostModalSay;