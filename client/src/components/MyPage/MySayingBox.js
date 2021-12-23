import style from './MySayingBox.module.css'
import { REACT_APP_API_URL } from '../../config'
import axios from 'axios'
import { setIsRendered, setFocusedSayingId, setFocusedTitle,setImages,
  setSayingTitles, setSayingIds, setIndex,setLikes,setLikeOrNew}
from '../../store/MainSlice'
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import{useSelector, useDispatch} from 'react-redux';
import {all, health, study, economy, relationship, love} from '../../store/LandingSlice';

function MySayingBox({sayings,loading}){

const dispatch = useDispatch();
let [curCategory,setCategory] = useState('전체');
const [isLikeNew,setLikeNew] = useState('좋아요순');
const { isRendered, focusedTitle, focusedSayingId, sayingTitles, sayingIds, index }
 = useSelector(state => state.main);

  /* 현재 카테고리의 명언제목들 수집 함수 */
 const getTitles = (titles) => {dispatch(setSayingTitles(titles))};
  /* 좋아요 수집 함수 */
  const getLikes = (likes) =>{dispatch(setLikes(likes))};
  /* 이미지 수집 함수 */
  const getImages = (images) =>{dispatch(setImages(images))};
  /* sayingId 수집 함수 */
  const getSayingId = (sayingIds) => {dispatch(setSayingIds(sayingIds))};
    /* 모달 ON,OFF state */
  const getLikeOrNew = (likeOrNew) => {dispatch(setLikeOrNew(likeOrNew))}


  if(loading){
    return <h2>loading...</h2>
  }

  const getLikeRanking = async (clickedCategory) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/ranking/like/?category=${clickedCategory}`,
      {withCredentials: true});
      if (response.data.data.allSaying) {
              getTitles(response.data.data.allSaying.map((el)=>{return el.content}));
       getLikes(response.data.data.allSaying.map((el)=>{return el.total_like}));
        getImages(response.data.data.allSaying.map((el)=>{return el.user.image}));
        getSayingId(response.data.data.allSaying.map((el)=>{return el.id})) ;

setLikeNew('좋아요순')
getLikeOrNew(('like'));
}
else {

getTitles(response.data.data.filteredSaying.map((el)=>{return el.content}));
        getLikes(response.data.data.filteredSaying.map((el)=>{return el.total_like}));
        getImages(response.data.data.filteredSaying.map((el)=>{return el.user.image}));
        getSayingId(response.data.data.filteredSaying.map((el)=>{return el.id}));
        
setLikeNew('좋아요순')
getLikeOrNew(('like'));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const goHealthPage = () =>{dispatch(health())};
  const goStudyPage = () =>{dispatch(study())};
  const goEconomyPage = () =>{dispatch(economy())};
  const goRelationshipPage = () =>{dispatch(relationship())};
  const goLovePage = () => {dispatch(love())};
  const goCategoryPage = (category) => {if (category === '건강'){goHealthPage()}
                                else if(category === '학습'){goStudyPage()}
                                else if(category === '경제'){goEconomyPage()}
                                else if(category === '인간관계'){goRelationshipPage()}
                                else if(category === '사랑'){goLovePage()}}

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
                  goCategoryPage(saying.category)
                  getLikeRanking(saying.category)
                  dispatch(setFocusedSayingId(saying.id))
                  dispatch(setFocusedTitle(saying.content))
                  dispatch(setIndex(sayingIds.indexOf(saying.id)));
                  dispatch(setIsRendered(true));
                  }}>
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