import style from './MyPageCategoryPost.module.css'
import {Routes, Route, Link} from 'react-router-dom';
function MyPageCategoryPost(){
  return (
    <div className={style.container}>
    <ul className={style.bar}>
      <li className={style.menus}>
        <Link className={style.menus} id={style.post} to='/mypage'>
          나의 게시물
          </Link>
          </li> 
      <li className={style.menus} id={style.saying}  onClick={PostClickEvent}>
          나의 명언
          </li>  
      <li className={style.menus} id={style.comment} >내가 쓴 댓글</li>
      <li className={style.menus} id={style.like} >좋아요</li>
    </ul>
  </div>
  )
}
export default MyPageCategoryPost;