import style from  './PostModalPost.module.css';
import { showPostModal} from '../../store/ModalSlice';
import { useDispatch } from 'react-redux'

function PostModalPost(){
  const dispatch = useDispatch();
    return(
      <div className = {style.post} onClick={() => dispatch(showPostModal(true))}>
       글 작성
      </div>
    )
}
export default PostModalPost;








