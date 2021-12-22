// import all from '../../images/category_health.png';
// import health from '../../images/category_health.png';
// import study from '../../images/category_study.png';
// import economy from '../../images/category_economy.png';
// import relationship from '../../images/category_relationship.png';
// import gold from '../../images/gold_medal.png';
// import silver from '../../images/silver_medal.png';
// import bronze from '../../images/bronze_medal.png';
// import love from '../../images/category_love.png';
// import style from './MainPageSaying.module.css'
// import {Link, useNavigate} from 'react-router-dom';
// import { setIsRendered, setFocusedTitle, setSayingTitles,setFocusedSayingId } from '../../store/MainSlice';
// import { useSelector,useDispatch } from 'react-redux';
// import React, { useState, useEffect} from 'react';
// import axios from 'axios';
// import { REACT_APP_API_URL } from '../../config';


/* 현재 페이지(curPage) props로 MainPage에서 받아옴 */
// function MainPageSaying(){
//   const dispatch = useDispatch();
//   const focusedSayingId = useSelector(state => state.focusedSayingId)
//   const sayingIds = useSelector(state => state.sayingIds)
//   const sayingTitles = useSelector(state => state.main.sayingTitles);
//   const focusedTitle = useSelector(state => state.main.focusedTitle);
//   const page = useSelector(state => state.landing.page);
//   const likes = useSelector(state => state.main.likes);
//   let category = [all, health, study, economy, relationship, love];
//   let medalImage = [gold, silver, bronze];
  /* 카테고리 순서로 이미지 import해온 것들 배열에 넣음 */

  // const getFocusedSayingId = (saying) =>{dispatch(setFocusedSayingId(saying))};
  // const getFocusedTitle = (title) =>{dispatch(setFocusedTitle(title))};

  // const upSaying = () => {
  //   if ((sayingTitles.indexOf(focusedTitle)-1) > -1){
  //     getFocusedTitle(sayingTitles[sayingTitles.indexOf(focusedTitle)-1]);
  //     console.log(sayingIds)
  //     console.log(focusedSayingId)
  //     console.log(focusedTitle)
  //     console.log(sayingTitles)
  //   }
  // }
  // const downSaying = () => {
  //   if ((sayingTitles.indexOf(focusedTitle)+1) < sayingTitles.length){
  //     getFocusedTitle(sayingTitles[sayingTitles.indexOf(focusedTitle)+1]);
  //     console.log(sayingIds)
  //     console.log(focusedSayingId)
  //     console.log(focusedTitle)
  //     console.log(sayingTitles)
  //   }
  // }

  // return (
  //   /* jumbotron 이미지 현재페이지에 따라 꺼내옴  */
  //   <div className={style.jumbotron} style={{backgroundImage : `url(${category[page]})`}}>
  //   {/* Sub Zone */}
  //   <div className={style.medal} style={{backgroundImage:`url(${medalImage[sayingTitles.indexOf(focusedTitle)]})`}}/>
  //   <div className={style.sub_box}>
  //        <Link className={style.link} to ='/rankingpage'>모든 명언 보기</Link>
  //     <div className={style.scroll_box}/>
  //   </div>

  // {/* Saying Zone */}
  // <div className={style.saying_box}>
  //   <div className={style.saying_up} onClick={upSaying}/>
  //   <div className={style.saying_down} onClick={downSaying}/>
  //   <div className={style.saying_left_66}/>
  //   <div className={style.saying_right_99}/>
  //   <div className={style.saying_up_message} onClick={upSaying}>{sayingTitles[sayingTitles.indexOf(focusedTitle)-1]}<br/></div>
  //   <div className={style.saying_message}>{focusedTitle}</div>
  //   <div className={style.saying_down_message} onClick={downSaying}>{sayingTitles[sayingTitles.indexOf(focusedTitle)+1]}<br/></div>
  // </div>  

  // {/* Like Box Zone */}
  //   <div className={style.like_box}>
  //     <div className={style.profile}/>
  //     <div className={style.heart_icon}/>
  //     <div className={style.like_count}>{likes[sayingTitles.indexOf(focusedTitle)]}</div>
  //   </div>

  // </div>
//   )   
// }
// export default MainPageSaying;