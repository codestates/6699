import all from '../../images/category_study.png';
import health from '../../images/category_health.png';
import study from '../../images/category_study.png';
import economy from '../../images/category_economy.png';
import relationship from '../../images/category_relationship.png';
import love from '../../images/category_love.png';
import style from './MainPageSaying.module.css'
import {Link} from 'react-router-dom';

/* 현재 페이지(curPage) props로 MainPage에서 받아옴 */
function MainPageSaying(props){
  /* 카테고리 순서로 이미지 import해온 것들 배열에 넣음 */
  let category = [all, health, study, economy, relationship, love];
  return (
    /* jumbotron 이미지 현재페이지에 따라 꺼내옴  */
    <div className={style.jumbotron} style={{backgroundImage : `url(${category[props.curPage]})`}}>
    {/* Sub Zone */}
    <div className={style.medal}/>
    <div className={style.sub_box}>
         <Link className={style.link} to ='/rankingpage'>모든 명언 보기</Link>
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