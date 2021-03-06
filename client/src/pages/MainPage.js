import category_all from '../images/category_health.png';
import category_health from '../images/category_health.png';
import category_study from '../images/category_study.png';
import category_economy from '../images/category_economy.png';
import category_relationship from '../images/category_relationship.png';
import category_love from '../images/category_love.png';
import gold from '../images/gold_medal.png';
import silver from '../images/silver_medal.png';
import bronze from '../images/bronze_medal.png';

import style from './MainPage.module.css'
import { useEffect } from 'react';
// import MainPageSaying from '../components/MainPage/MainPageSaying';
import PostBox from '../components/MainPage/PostBox';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

import {all, health, study, economy, relationship, love} from '../store/LandingSlice';

import React, { useState } from 'react';
import MainSayingMiniModal from '../components/MainPage/MainSayingMiniModal';
import {useSelector, useDispatch } from 'react-redux';
import { login, logout, getUserInfo } from '../store/AuthSlice';
import { setIsRendered, setFocusedTitle, setSayingTitles, setLikes, setFocusedSayingId,setSayingIds, setPosts, setLikeOrNew, setIndex } from '../store/MainSlice';
import { REACT_APP_API_URL } from '../config';
import axios from 'axios';

function MainPage(){
  const likes = useSelector(state =>state.main.likes);
  const page = useSelector(state => state.landing.page);
  const isRendered = useSelector(state => state.main.isRendered);
  const focusedTitle = useSelector(state => state.main.focusedTitle);
  const sayingTitles = useSelector(state => state.main.sayingTitles);
  const focusedSayingId = useSelector(state => state.main.focusedSayingId);
  const sayingIds = useSelector(state => state.main.sayingIds);
  const posts = useSelector(state => state.main.posts);
  const likeOrNew = useSelector(state => state.main.likeOrNew);
  const index = useSelector(state => state.main.index);

  let categoryImage = [category_all, category_health, category_study, category_economy, category_relationship, category_love];
  let category = ['??????','??????', '??????', '??????', '????????????', '??????']
  let medalImage = [gold,silver,bronze]
  let [curCategory,setCategory] = useState(category[page]);
  const dispatch = useDispatch();

  console.log('??????????????? / sayingIds :',sayingIds);
  console.log('??????????????? / idx :',index);

  /* ????????? ?????? ?????? */
  const goAllPage = () =>{dispatch(all())};
  const goHealthPage = () =>{dispatch(health())};
  const goStudyPage = () =>{dispatch(study())};
  const goEconomyPage = () =>{dispatch(economy())};
  const goRelationshipPage = () =>{dispatch(relationship())};
  const goLovePage = () => {dispatch(love())};
  /***************/

  /* ????????? ?????? ?????? ?????? */
  const renderingDone = () => {dispatch(setIsRendered(true))};
  /* ???????????? sayingId ?????? ?????? */
  const getFocusedSayingId = (sayingIds) =>{dispatch(setFocusedSayingId(sayingIds))};
  /* ????????? ?????? ?????? */
  const getIndex = (idx) =>{dispatch(setIndex(idx))};
  /* ?????? ???????????? ?????? ?????? ?????? */
  const getFocusedTitle = (title) =>{ dispatch(setFocusedTitle(title))};
  /* ?????? ??????????????? ??????????????? ?????? ?????? */
  const getTitles = (titles) => {dispatch(setSayingTitles(titles))};
  /* ????????? ?????? ?????? */
  const getLikes = (likes) =>{dispatch(setLikes(likes))};
  /* sayingId ?????? ?????? */
  const getSayingId = (sayingIds) => {dispatch(setSayingIds(sayingIds))};
  /* ????????? ?????? ?????? */
  const getPosts = (posts) => {dispatch(setPosts(posts))};
  /* ?????? ON,OFF state */
  const getLikeOrNew = (likeOrNew) => {dispatch(setLikeOrNew(likeOrNew))}

  const [isOpen,setIsOpen] = useState(false);
  const [isLikeNew,setLikeNew] = useState('????????????');

  const upSaying = () => {
    if ((index -1) > -1){
      getFocusedSayingId(sayingIds[index-1]);
      getFocusedTitle(sayingTitles[index-1]);
      getIndex(index-1);
    }
  }
  const downSaying = () => {
    if ((index+1) < sayingIds.length){
      getFocusedSayingId(sayingIds[index+1]);
      getFocusedTitle(sayingTitles[index+1]);
      getIndex(index+1);
    }
  }

  const clickIsLike = () => {setLikeNew('????????????')
                            getLikeOrNew(('like'));
                            console.log(likeOrNew)
                           getLikeRankingPost(focusedSayingId)
                           setIsOpen(false)}
  const clickIsNew = () => {setLikeNew('?????????')
                          getLikeOrNew(('new'));
                          console.log(likeOrNew);
                           setIsOpen(false)
                           getNewRankingPost(focusedSayingId)
                           setIsOpen(false)}
  const modalOff = () => {setIsOpen(false)}

  const getLikeRanking = async (curCategory) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/ranking/like/?category=${curCategory}`,
      {withCredentials: true});
      if (response.data.data.allSaying) {
        getFocusedTitle(response.data.data.allSaying[0].content);
        getTitles(response.data.data.allSaying.map((el)=>{return el.content}));
        getLikes(response.data.data.allSaying.map((el)=>{return el.total_like}));
        getSayingId(response.data.data.allSaying.map((el)=>{return el.id})) ;
        getFocusedSayingId(response.data.data.allSaying[0].id);
        getIndex(0);
      }
      else {
        getFocusedTitle(response.data.data.filteredSaying[0].content);
        getTitles(response.data.data.filteredSaying.map((el)=>{return el.content}));
        getLikes(response.data.data.filteredSaying.map((el)=>{return el.total_like}));
        getSayingId(response.data.data.filteredSaying.map((el)=>{return el.id}));
        getFocusedSayingId(response.data.data.filteredSaying[0].id);
        getIndex(0);
      }
    } catch (err) {
      console.log(err);
    }
  };
  /* ??? ???????????? ??? ?????? ???????????? ?????? ???????????? */
    if (isRendered === false){
      getLikeRanking(category[page]);
      renderingDone()
    }  
  /* ???????????? ????????? */
  const getLikeRankingPost = async (focusedSayingId) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/${focusedSayingId}/article?order=like`,
      {withCredentials: true});
      getPosts(response.data.data.articleInfo);
      console.log(posts);
    } catch (err) {
      console.log(err);
    }
  };
  /* ????????? ????????? */
  const getNewRankingPost = async (focusedSayingId) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/${focusedSayingId}/article?order=new`,
      {withCredentials: true});
      getPosts(response.data.data.articleInfo);
      console.log(posts);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={style.container}>
      <div className={style.category_container}>
        <div className={style.category_bar}>
        
        {/* ???????????????(curPage)??? ?????? ??? ?????? */}   
        <div className={style.category_all} onClick={()=>{setCategory('??????')
                                                          getLikeRanking('??????')
                                                          goAllPage()}}
                                            style={curCategory === '??????'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>??????</div>
        <div className={style.category_health} onClick={()=>{setCategory('??????')
                                                            getLikeRanking('??????')
                                                            goHealthPage()}} 
                                            style={curCategory === '??????'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>??????</div>
        <div className={style.category_study} onClick={()=>{setCategory('??????')
                                                            getLikeRanking('??????')
                                                            goStudyPage()}}
                                            style={curCategory === '??????'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>??????</div>
        <div className={style.category_economy} onClick={()=>{setCategory('??????')
                                                              getLikeRanking('??????')
                                                              goEconomyPage()}}
                                            style={curCategory === '??????'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>??????</div>
        <div className={style.category_relationship} onClick={()=>{setCategory('????????????')
                                                                  getLikeRanking('????????????')
                                                                  goRelationshipPage()}}
                                            style={curCategory === '????????????'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>????????????</div>
        <div className={style.category_love} onClick={()=>{setCategory('??????')
                                                           getLikeRanking('??????')
                                                           goLovePage()}}
                                            style={curCategory === '??????'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>??????</div>
      </div>
      </div>
      <div>
        {/* ?????????,????????? ?????? */}
        <div className={style.liketoggle_box}>
          <div className = {style.toggle} onClick={()=> {
            !isOpen
            ?setIsOpen(true)
            :setIsOpen(false)
          }}></div>
          <div className={style.likenew}>{isLikeNew}</div>
        </div>
      </div>
       {isOpen&&<MainSayingMiniModal modalOff = {modalOff} clickIsLike = {clickIsLike} clickIsNew = {clickIsNew} />}
        {/* ????????? ?????? */}

     {/* Like Box Zone */}


      {/* jumbotron ????????? ?????????????????? ?????? ?????????  */}
    <div className={style.jumbotron} style={{backgroundImage : `url(${categoryImage[page]})`}}>
        {/* Sub Zone */}
      <div className={style.like_box}>
      <div className={style.profile}/>
      <div className={style.heart_icon}/>
      <div className={style.like_count}>{likes[sayingIds.indexOf(focusedSayingId)]}</div>
    </div>
      <div className={style.medal} style={{backgroundImage:`url(${medalImage[sayingIds.indexOf(focusedSayingId)]})`}}/>
      <div className={style.sub_box}>
        <Link className={style.link} to ='/rankingpage'>?????? ?????? ??????</Link>
      <div className={style.scroll_box}/>
     </div>

        {/* Saying Zone */}
        <div className={style.saying_box}>
          <div className={style.saying_up} onClick={upSaying}/>
          <div className={style.saying_down} onClick={downSaying}/>
          <div className={style.saying_left_66}/>
          <div className={style.saying_right_99}/>
          <div className={style.saying_up_message} onClick={upSaying}>{sayingTitles[sayingIds.indexOf(focusedSayingId)-1]}<br/></div>
          <div className={style.saying_message}>{focusedTitle}</div>
          <div className={style.saying_down_message} onClick={downSaying}>{sayingTitles[sayingIds.indexOf(focusedSayingId)+1]}<br/></div>
         </div>  
      </div>


        {/* <MainPageSaying/> */}
        <PostBox />
        <div className={style.footer}>
        {/* ?????? */}   
        <Footer/>
      </div>
    </div>
  )
}
export default MainPage;