/*****done*****/
import style from './PostMiniModal.module.css'
import PostModalPost from './PostModalPost';
import PostModalSay from './PostModalSay';
function PostMiniModal(){
  return(
    <div>
      <div className={style.box}>
        <div className={style.post}><PostModalPost/></div>
        <div className={style.say}><PostModalSay/></div>
      </div>
    </div>         
  )
}
export default PostMiniModal;