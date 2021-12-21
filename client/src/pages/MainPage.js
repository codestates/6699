import style from './MainPage.module.css'
import { useEffect } from 'react';
import MainPageSaying from '../components/MainPage/MainPageSaying';
import PostBox from '../components/MainPage/PostBox';
import Footer from '../components/Footer';
import {all, health, study, economy, relationship, love} from '../store/LandingSlice';
import React, { useState } from 'react';
import MainSayingMiniModal from '../components/MainPage/MainSayingMiniModal';
import {useSelector, useDispatch } from 'react-redux';
import { login, logout, getUserInfo } from '../store/AuthSlice';
import { setIsRendered, setFocusedTitle, setSayingTitles, setLikes, setFocusedSayingId,setSayingIds, setPosts } from '../store/MainSlice';
import { REACT_APP_API_URL } from '../config';
import axios from 'axios';
import postData from '../components/MainPage/MainPostingDummy';
import sayingData from '../components/MainPage/MainSayingDummy';

function MainPage(){


  const likes = useSelector(state =>state.main.likes);
  const page = useSelector(state => state.landing.page);
  const isRendered = useSelector(state => state.main.isRendered);
  const focusedTitle = useSelector(state => state.main.focusedTitle);
  const sayingTitles = useSelector(state => state.main.sayingTitles);
  const focusedSayingId = useSelector(state => state.main.focusedSayingId);
  const sayingIds = useSelector(state => state.main.sayingIds);
  const posts = useSelector(state => state.main.posts);
  let category = ['전체','건강', '학습', '경제', '인간관계', '사랑']
  let [curCategory,setCategory] = useState(category[page]);
  const dispatch = useDispatch();


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
  const getFocusedSayingId = (sayingId) =>{dispatch(setFocusedSayingId(sayingId))};

  /* sayingId 재갱신 함수 (위아래버튼) */
  const getReNewSayingId = (index) => {dispatch(setFocusedSayingId(sayingIds[index]))
                                       console.log(sayingIds);
                                       console.log(sayingIds[index])
                                       getLikeRanking
                                      }
                                       
  /* 현재 포커싱된 명언 갱신 함수 */
  const focusTitle = (title) =>{ dispatch(setFocusedTitle(title))};
  /* 현재 카테고리의 명언제목들 수집 함수 */
  const getTitles = (titles) => {dispatch(setSayingTitles(titles))};
  /* 좋아요 수집 함수 */
  const getLikes = (likes) =>{dispatch(setLikes(likes))};
  /* sayingId 수집 함수 */
  const getSayingId = (sayingId) => {dispatch(setSayingIds(sayingId))};
  /* 게시물 수집 함수 */
  const getPosts = (posts) => {dispatch(setPosts(posts))};
  /* 모달 ON,OFF state */
  const [isOpen,setIsOpen] = useState(false);
  const [isLikeNew,setLikeNew] = useState('좋아요순');
  
  const clickLike = () => {setLikeNew('좋아요순')
                           setIsOpen(false)
                           getLikeRankingPost(focusedSayingId)}
  const clickNew = () => {setLikeNew('최신순')
                           setIsOpen(false)
                           getNewRankingPost(focusedSayingId)}
                           
  const modalOff = () => {setIsOpen(false)}

  const getLikeRanking = async (curCategory) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/ranking/like/?category=${curCategory}`,
      {withCredentials: true});

      if (response.data.data.allSaying) {
        focusTitle(response.data.data.allSaying[0].content);
        getTitles(response.data.data.allSaying.map((el)=>{return el.content}));
        getLikes(response.data.data.allSaying.map((el)=>{return el.total_like}));
        getSayingId(response.data.data.allSaying.map((el)=>{return el.id})) ;
        getFocusedSayingId(response.data.data.allSaying[0].id);
        getLikeRankingPost(focusedSayingId);
      }
      else {
        focusTitle(response.data.data.filteredSaying[0].content);
        getTitles(response.data.data.filteredSaying.map((el)=>{return el.content}));
        getLikes(response.data.data.filteredSaying.map((el)=>{return el.total_like}));
        getSayingId(response.data.data.filteredSaying.map((el)=>{return el.id}));
        getFocusedSayingId(response.data.data.filteredSaying[0].id);
        getLikeRankingPost(focusedSayingId);
      }
    } catch (err) {
      console.log(err);
    }
  };
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


  /* 첫 렌더링일 시 해당 카테고리 명언 가져오기 */
  if (isRendered === false){
    getLikeRanking(category[page]);
    renderingDone()
  }
  return (
    <div className={style.container}>
      {/* MainPageSaying 컴포넌트 */}
      <MainPageSaying curCategory={curCategory} getLikeRanking = {getLikeRanking} getLikeRankingPost = {getLikeRankingPost} getReNewSayingId = {getReNewSayingId}/>
      <div className={style.category_container}>
        <div className={style.category_bar}>
        
        {/* 현재페이지(curPage)에 따라 색 변경 */}   
        <div className={style.category_all} onClick={()=>{setCategory('전체'),getLikeRanking('전체'), goAllPage()}}
                                            style={curCategory === '전체'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>전체</div>
        <div className={style.category_health} onClick={()=>{setCategory('건강'),getLikeRanking('건강'),goHealthPage()}} 
                                            style={curCategory === '건강'
                                           ?{backgroundColor:'#FFBF31',color:'white'}
                                           :{backgroundColor:'white', color:'#404040'}}>건강</div>
        <div className={style.category_study} onClick={()=>{setCategory('학습'),getLikeRanking('학습'),goStudyPage()}}
                                            style={curCategory === '학습'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>학습</div>
        <div className={style.category_economy} onClick={()=>{setCategory('경제'),getLikeRanking('경제'),goEconomyPage()}}
                                            style={curCategory === '경제'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>경제</div>
        <div className={style.category_relationship} onClick={()=>{setCategory('인간관계'),getLikeRanking('인간관계'),goRelationshipPage()}}
                                            style={curCategory === '인간관계'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>인간관계</div>
        <div className={style.category_love} onClick={()=>{setCategory('사랑'),getLikeRanking('사랑'),goLovePage()}}
                                            style={curCategory === '사랑'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>사랑</div>
      </div>
      </div>
      <div>
        {/* 좋아요,최신순 토글 */}
        <div className={style.like_box}>
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
        <PostBox />
        <div className={style.footer}>
        {/* 푸터 */}   
        <Footer/>
      </div>
    </div>
  )
}
export default MainPage;