import style from '../MyPage/MyPageCategory.module.css'
import {Link} from 'react-router-dom';
function MyPageCategory(){
  return (
    <div className={style.container}>
      <div className={style.bar}>
        <div className={style.post}>
          <Link className={style.text} to='/mypage'>
            나의 게시물
            </Link>
            </div> 
        <div className={style.saying}>
            나의 명언
            </div>  
        <div className={style.comment}>내가 쓴 댓글</div>
        <div className={style.like}>좋아요</div>
      </div>
    </div>
  )
}
export default MyPageCategory;