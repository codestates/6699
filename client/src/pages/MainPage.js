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
import { setIsRendered, setIsFirst } from '../store/MainSlice';
import { REACT_APP_API_URL } from '../config';
import axios from 'axios';
import postData from '../components/MainPage/MainPostingDummy';
import sayingData from '../components/MainPage/MainSayingDummy';

function MainPage(){
  const page = useSelector(state => state.landing.page);
  const isRendered = useSelector(state => state.main.isRendered);
  const isFirst = useSelector(state => state.main.isFirst);
  let category = ['전체','건강', '학습', '경제', '인간관계', '사랑']
  let [curCategory,setCategory] = useState(category[page]);
  const dispatch = useDispatch();

  /* 렌더링 상태 변경 함수 */
  function renderingDone(){
    dispatch(setIsRendered(true))
  }
  /* 첫번째 명언 감지 함수 */
  function firstSaying(){
    dispatch(setIsFirst())
  }
  /* 모달 ON,OFF state */
  let [isOpen,setIsOpen] = useState(false);

  /* 좋아요순, 최신순 state */
  let [isLikeOrNew,setLikeNew] = useState('좋아요순');

  let [ranking,setRanking] = useState([]);
  const getLikeRanking = async (curCategory) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/ranking/like/?category=${curCategory}`,
      {withCredentials: true});
      
      setRanking(response.data.data.allSaying ? response.data.data.allSaying
                                              : response.data.data.filteredSaying);
      console.log(response.data.data.allSaying ? response.data.data.allSaying :(response.data.data.filteredSaying))
    } catch (err) {
      console.log(err);
    }
  };

  /* 좋아요순, 최신순 선택함수 */
  const clickLike = () => {
    setIsOpen(false)
    setLikeNew('좋아요순')}
  const clickNew = () => {
    setIsOpen(false)
    setLikeNew('최신순')}
  const modalOff = () => {
    setIsOpen(false)}


  /* 첫 렌더링일 시 해당 카테고리 명언 가져오기 */
  if (isRendered === false){
    getLikeRanking(category[page]);
    renderingDone()
  }
  return (
    <div className={style.container}>
      {/* MainPageSaying 컴포넌트 */}
      <MainPageSaying/>
      <div className={style.category_container}>
        <div className={style.category_bar}>
        
        {/* 현재페이지(curPage)에 따라 색 변경 */}   
        <div className={style.category_all} onClick={()=>{setCategory('전체'),getLikeRanking('전체')}}
                                            style={curCategory === '전체'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>전체</div>
        <div className={style.category_health} onClick={()=>{setCategory('건강'),getLikeRanking('건강')}} 
                                            style={curCategory === '건강'
                                           ?{backgroundColor:'#FFBF31',color:'white'}
                                           :{backgroundColor:'white', color:'#404040'}}>건강</div>
        <div className={style.category_study} onClick={()=>{setCategory('학습'),getLikeRanking('학습')}}
                                            style={curCategory === '학습'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>학습</div>
        <div className={style.category_economy} onClick={()=>{setCategory('경제'),getLikeRanking('경제')}}
                                            style={curCategory === '경제'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>경제</div>
        <div className={style.category_relationship} onClick={()=>{setCategory('인간관계'),getLikeRanking('인간관계')}}
                                            style={curCategory === '인간관계'
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>인간관계</div>
        <div className={style.category_love} onClick={()=>{setCategory('사랑'),getLikeRanking('사랑')}}
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
          <div className={style.likenew}>{isLikeOrNew}</div>
        </div>
      </div>
       {isOpen&&<MainSayingMiniModal modalOff = {modalOff} clickLike={clickLike} clickNew={clickNew}/>}
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