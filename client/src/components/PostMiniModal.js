import './PostMiniModal.css'
import PostModalPost from './PostModalPost';
import PostModalSay from './PostModalSay';
function PostMiniModal(){
  return(
    <div>
      <div className='modal-box'>
        <div className='modal-post'><PostModalPost/></div>
        <div className='modal-say'><PostModalSay/></div>
      </div>
    </div>         
  )
}
export default PostMiniModal;