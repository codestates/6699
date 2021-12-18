/*****done*****/
import style from './Post.module.css';
import {Link} from 'react-router-dom';
import MainPageSayingToggle from './MainPageSayingToggle';
function Post(){
  return (
    <div className={style.container}>
      <div className={style.like_box}>
      <div className={style.likenew_toggle}>
         <MainPageSayingToggle/>
      </div>
      <div className={style.likenew}>좋아요순</div>
      </div>
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
            <Link className={style.post_link} to='/postingpage'/> 
          </div>
        </div>
      </div>
      <div className={style.page_box}>
        <div className={style.page_box_left_arrow}/>
        <div className={style.page_box_right_arrow}/>
        <div className={style.page_box_number}/>
        <div className={style.page_box_number}/>
        <div className={style.page_box_number}/>
      </div>

    </div>
  )
}
export default Post;