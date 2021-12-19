import style from './Post.module.css';
import MainPageSayingToggle from './MainPageSayingToggle';
function Post(){
  return (
    <div className={style.container}>
      <div className={style.like_box}>
      <div className={style.likenew_toggle}>
         {/* 좋아요,최신순 토글 */}
         <MainPageSayingToggle/>
      </div>
      <div className={style.likenew}>좋아요순</div>
      </div>
    </div>
  )
}
export default Post;