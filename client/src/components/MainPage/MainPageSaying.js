/*****done*****/
import style from './MainPageSaying.module.css'
import {Link} from 'react-router-dom';
import MainPageSayingToggle from './MainPageSayingToggle';
function MainPageSaying(){
  return (
    <div className={style.jumbotron}>
    {/* Sub Zone */}
    <div className={style.medal}/>
    <div className={style.sub_box}>
         <Link to='/mainpageplusbutton'></Link>
         <Link className={style.link} to ='/rankingpage'>모든 명언 보기</Link>

      <div className={style.likenew_toggle}>
         <MainPageSayingToggle/>
      </div>
      <div className={style.likenew}>좋아요순</div>
      <div className={style.scroll_box}/>
    </div>

  {/* Saying Zone */}
  <div className={style.saying_box}>
    <div className={style.saying_left_66}/>
    <div className={style.saying_right_99}/>
    <div className={style.saying_message}>땀은 지방의 눈물이다.</div>
    <div className={style.saying_sub_message}>칼에 죽는 사람보다<br/>과식으로 죽는 사람이 더 많다.<br/></div>
  </div>  
  {/* Like Box Zone */}
    <div className={style.like_box}>
      <div className={style.profile}/>
      <div className={style.heart_icon}/>
      <div className={style.like_count}>130</div>
    </div>

  </div>
  )   
}
export default MainPageSaying;