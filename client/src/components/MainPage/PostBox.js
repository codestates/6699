import style from './PostBox.module.css';
import {Link} from 'react-router-dom';
function PostBox(){
  return(
  /****** 게시물 묶음 ******/
<div className={style.container}>
  <div className={style.post_box}>
    <div className={style.post_box_low}>
      <div className={style.post_box_low_post}>
        <Link className={style.post_link} to='/postingpage'/>
      </div>
      <div className={style.post_box_low_post}>
        <Link className={style.post_link} to='/postingpage'/>
      </div>
        <div className={style.post_box_low_post}>
          <Link className={style.post_link} to='/postingpage'/>     
        </div>
    </div>
      <div className={style.post_box_low}>
        <div className={style.post_box_low_post}>
          <Link className={style.post_link} to='/postingpage'/>
        </div>
        <div className={style.post_box_low_post}>
          <Link className={style.post_link} to='/postingpage'/>
        </div>
        <div className={style.post_box_low_post}>
          <Link className={style.post_link} to='/postingpage'/>
        </div>
      </div>
      <div className={style.post_box_low}>
      <div className={style.post_box_low_post}>
        <Link className={style.post_link} to='/postingpage'/> 
      </div>
      <div className={style.post_box_low_post}>
        <Link className={style.post_link} to='/postingpage'/>
      </div>
      <div className={style.post_box_low_post}>
        <Link className={style.post_link} to='/postingpage'style={{opacity:0, pointerEvents:'none'}}/> 
      </div>
    </div>
  </div>
  {/****** 페이지 박스 ******/}
  <div className={style.page_box}>
    <div className={style.page_box_left_arrow}/>
    <div className={style.page_box_right_arrow}/>
    <div className={style.page_pageBox}>
      <div className={style.page_box_number}/>
      <div className={style.page_box_number}/>
      <div className={style.page_box_number}/>
    </div>
  </div>
</div>
)
}
export default PostBox;
