import style from './MySayingBox.module.css'
import { REACT_APP_API_URL } from '../../config'
import axios from 'axios'
import { setIsRendered, setFocusedSayingId, setFocusedTitle, setSayingTitles, setSayingIds, setIndex,  }
from '../../store/MainSlice'
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import{useSelector, useDispatch} from 'react-redux';
import {all, health, study, economy, relationship, love} from '../../store/LandingSlice';

function MySayingBox({sayings,loading}){

const dispatch = useDispatch();
let [curCategory,setCategory] = useState('전체');
const { isRendered, focusedTitle, focusedSayingId, sayingTitles, sayingIds, index }
 = useSelector(state => state.main);

//메인페이지 이동 함수
const goPage = () => {
  if(curCategory==='전체') dispatch(all());
  else if(curCategory==='건강') dispatch(health());
  else if(curCategory==='학습') dispatch(study());
  else if(curCategory==='경제') dispatch(economy());
  else if(curCategory==='인간관계') dispatch(relationship());
  else if(curCategory==='사랑') dispatch(love());
}

  if(loading){
    return <h2>loading...</h2>
  }

 return (
    <div id={style.saying_wrap}>
      {sayings.map(saying => (
         <li key ={saying.id} className={style.saying}>
           {saying.category === '건강' ?
           (<div className={style.category_image} id={style.health}></div>):(null)}
           {saying.category === '학습' ?
           (<div className={style.category_image} id={style.study}></div>):(null)}
           {saying.category === '경제' ?
           (<div className={style.category_image} id={style.economy}></div>):(null)}
           {saying.category === '인간관계' ?
           (<div className={style.category_image} id={style.relationship}></div>):(null)}
           {saying.category === '사랑' ?
           (<div className={style.category_image} id={style.love}></div>):(null)}

           <button id={style.trashcan}>
           </button>
           <div id={style.set_title_middle_box}>
             <div className={style.title}>
              <div id={style.icon_66}></div>
              <p id={style.saying}>
                <Link to= '/mainpage' className={style.link} 
                onClick={() =>{
                  dispatch(setFocusedSayingId(saying.id))
                  dispatch(setFocusedTitle(saying.content))
                  dispatch(setIndex(sayingIds.indexOf(saying.id)));
                  dispatch(setIsRendered(true));
                  goPage()}}>
                {saying.content}
               </Link>
              </p>
             <div id={style.icon_99}></div>
            </div>
          </div>
    
          <div className={style.icon_box}>
           <div id={style.heart}></div>
           <div id={style.post}></div>
         </div>
         </li>
      ))}
      </div>
 )   
}

export default MySayingBox;