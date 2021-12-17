/*****done*****/
import style from './Post.module.css';
import {Link} from 'react-router-dom';
function Post(){
  return (
    <div className={style.container}>
      <div className={style.like_box}>
        <div className={style.like_toggle} />
        <div className={style.like_word}></div>
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