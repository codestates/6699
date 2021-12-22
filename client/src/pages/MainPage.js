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
  let category = ['전체','건강', '학습', '경제', '인간관계', '사랑']
  let medalImage = [gold,silver,bronze]
  let [curCategory,setCategory] = useState(category[page]);
  const dispatch = useDispatch();

  console.log('메인페이지 / 현재 focusedSayingId : ', focusedSayingId);

  /* 이미지 변경 함수 */
  const goAllPage = () =>{dispatch(all())};
  const goHealthPage = () =>{dispatch(health())};
  const goStudyPage = () =>{dispatch(study())};
  const goEconomyPage = () =>{dispatch(economy())};
  const goRelationshipPage = () =>{dispatch(relationship())};
  const goLovePage = () => {dispatch(love())};
  /***************/

  /* 렌더링 상태 변경 함수 */
  const renderingDone = () => {dispatch(setIsRendered(true))};
  /* 포커싱된 sayingId 갱신 함수 */
  const getFocusedSayingId = (sayingIds) =>{dispatch(setFocusedSayingId(sayingIds))};
  /* 인덱스 저장 함수 */
  const getIndex = (idx) =>{dispatch(setIndex(idx))};
  /* 현재 포커싱된 명언 갱신 함수 */
  const getFocusedTitle = (title) =>{ dispatch(setFocusedTitle(title))};
  /* 현재 카테고리의 명언제목들 수집 함수 */
  const getTitles = (titles) => {dispatch(setSayingTitles(titles))};
  /* 좋아요 수집 함수 */
  const getLikes = (likes) =>{dispatch(setLikes(likes))};
  /* sayingId 수집 함수 */
  const getSayingId = (sayingIds) => {dispatch(setSayingIds(sayingIds))};
  /* 게시물 수집 함수 */
  const getPosts = (posts) => {dispatch(setPosts(posts))};
  /* 모달 ON,OFF state */

  const [isOpen,setIsOpen] = useState(false);
  const [isLikeNew,setLikeNew] = useState('좋아요순');

  

  /***********     정현님께!!!!!   ********************/

  /* sayingIds: 스테이트(mainSlice에 들어있는 sayingId들 넣는 배열 */

  /* getfocusedSayingId: 액션(현재 포커싱된 sayingId를 넣으면 게시물과 현재 위치가 갱신됩니다.)

  /* 메인페이지에서 랭킹을 받아올 때 index의 초기값은 0으로 설정됩니다. */ 

  /* 랭킹 페이지에서 받아올 때에는 현재 선택한 명언 id를 따로 받아와서   
  
  /* 메인페이지의 sayingIds.indexOf(선택한명언id) 값을 getIndex(index)에 넣어준 뒤 */

  /* getFocusedSayingId(sayingIds[index]) 해주시면 게시물과 현재 위치가 갱신될겁니다! */

  /**************************************************/

  const upSaying = () => {
    if ((index -1) > -1){
      getIndex(index-1);
      getFocusedSayingId(sayingIds[index]);
      getFocusedTitle(sayingTitles[index]);
    }
  }
  const downSaying = () => {
    if ((index+1) <= sayingIds.length){
      getIndex(index+1);
      getFocusedSayingId(sayingIds[index]);
      getFocusedTitle(sayingTitles[index]);
    }
  }

  const clickLike = () => {setLikeNew('좋아요순')
                           setIsOpen(false)
                           getLikeRankingPost(focusedSayingId)}
                           setLikeOrNew('like');
  const clickNew = () => {setLikeNew('최신순')
                           setIsOpen(false)
                           getNewRankingPost(focusedSayingId)}
                           setLikeOrNew('new');
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
        console.log(sayingIds)
        console.log(focusedSayingId)
      }
      else {
        getFocusedTitle(response.data.data.filteredSaying[0].content);
        getTitles(response.data.data.filteredSaying.map((el)=>{return el.content}));
        getLikes(response.data.data.filteredSaying.map((el)=>{return el.total_like}));
        getIndex(0);
        getSayingId(response.data.data.filteredSaying.map((el)=>{return el.id}));
        getFocusedSayingId(response.data.data.filteredSaying[0].id);
        console.log(sayingIds)
        console.log(focusedSayingId)
      }
    } catch (err) {
      console.log(err);
    }
  };
  /* 첫 렌더링일 시 해당 카테고리 명언 가져오기 */
    if (isRendered === false){
      getLikeRanking(category[page]);
      renderingDone()
    }  
  /* 좋아요순 게시물 */
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
  /* 최신순 게시물 */
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
        
        {/* 현재페이지(curPage)에 따라 색 변경 */}   
        <div className={style.category_all} onClick={()=>{setCategory('전체')
                                                          getLikeRanking('전체')
                                                          goAllPage()}}
                                            style={curCategory === '전체'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>전체</div>
        <div className={style.category_health} onClick={()=>{setCategory('건강')
                                                            getLikeRanking('건강')
                                                            goHealthPage()}} 
                                            style={curCategory === '건강'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>건강</div>
        <div className={style.category_study} onClick={()=>{setCategory('학습')
                                                            getLikeRanking('학습')
                                                            goStudyPage()}}
                                            style={curCategory === '학습'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>학습</div>
        <div className={style.category_economy} onClick={()=>{setCategory('경제')
                                                              getLikeRanking('경제')
                                                              goEconomyPage()}}
                                            style={curCategory === '경제'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>경제</div>
        <div className={style.category_relationship} onClick={()=>{setCategory('인간관계')
                                                                  getLikeRanking('인간관계')
                                                                  goRelationshipPage()}}
                                            style={curCategory === '인간관계'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>인간관계</div>
        <div className={style.category_love} onClick={()=>{setCategory('사랑')
                                                            getLikeRanking('사랑')
                                                            goLovePage()}}
                                            style={curCategory === '사랑'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>사랑</div>
      </div>
      </div>
      <div>
        {/* 좋아요,최신순 토글 */}
        <div className={style.liketoggle_box}>
          <div className = {style.toggle} onClick={()=> {
            !isOpen
            ?setIsOpen(true)
            :setIsOpen(false)
          }}></div>
          <div className={style.likenew}>{isLikeNew}</div>
        </div>
      </div>
       {isOpen&&<MainSayingMiniModal modalOff = {modalOff} clickLike = {clickLike} clickNew = {clickNew} />}
        {/* 게시물 묶음 */}

     {/* Like Box Zone */}
    <div className={style.like_box}>
      <div className={style.profile}/>
      <div className={style.heart_icon}/>
      <div className={style.like_count}>{likes[sayingTitles.indexOf(focusedTitle)]}</div>
    </div>

      {/* jumbotron 이미지 현재페이지에 따라 꺼내옴  */}
    <div className={style.jumbotron} style={{backgroundImage : `url(${categoryImage[page]})`}}>
        {/* Sub Zone */}
      <div className={style.medal} style={{backgroundImage:`url(${medalImage[sayingTitles.indexOf(focusedTitle)]})`}}/>
      <div className={style.sub_box}>
        <Link className={style.link} to ='/rankingpage'>모든 명언 보기</Link>
      <div className={style.scroll_box}/>
     </div>

        {/* Saying Zone */}
      <div className={style.saying_box}>
      <div className={style.saying_up} onClick={upSaying}/>
      <div className={style.saying_down} onClick={downSaying}/>
      <div className={style.saying_left_66}/>
      <div className={style.saying_right_99}/>
      <div className={style.saying_up_message} onClick={upSaying}>{sayingTitles[sayingTitles.indexOf(focusedTitle)-1]}<br/></div>
      <div className={style.saying_message}>{focusedTitle}</div>
      <div className={style.saying_down_message} onClick={downSaying}>{sayingTitles[sayingTitles.indexOf(focusedTitle)+1]}<br/></div>
      </div>  
      </div>


        {/* <MainPageSaying/> */}
        <PostBox />
        <div className={style.footer}>
        {/* 푸터 */}   
        <Footer/>
      </div>
    </div>
  )
}
export default MainPage;