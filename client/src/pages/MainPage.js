import style from './MainPage.module.css'
import MainPageSaying from '../components/MainPage/MainPageSaying';
import PostBox from '../components/MainPage/PostBox';
import Footer from '../components/Footer';
import {all, health, study, economy, relationship, love} from '../store/LandingSlice';
import React, { useState } from 'react';
import MainSayingMiniModal from '../components/MainPage/MainSayingMiniModal';
import {useSelector, useDispatch } from 'react-redux';

function MainPage(){
  const page = useSelector(state => state.landing.page);
  const dispatch = useDispatch();
  /* 모달 ON,OFF state */
  let [isOpen,setIsOpen] = useState(false);

  /* 좋아요순, 최신순 state */
  let [isLikeOrNew,setLikeNew] = useState('좋아요순');


  /* 좋아요순, 최신순 선택함수 */
  const clickLike = () => {
    setIsOpen(false)
    setLikeNew('좋아요순')}
  const clickNew = () => {
    setIsOpen(false)
    setLikeNew('최신순')}
  const modalOff = () => {
    setIsOpen(false)}

  /* 각 카테고리 변경 함수 */
  function goAllPage(){
    dispatch(all());
   }
   function goHealthPage(){
    dispatch(health());
   }
   function goStudyPage(){
    dispatch(study());
   }
   function goEconomyPage(){
    dispatch(economy());
   }
   function goRelationshipPage(){
    dispatch(relationship());
   }
   function goLovePage(){
    dispatch(love());
   }

  /* 랜딩페이지에서 누른 명언 페이지 숫자를 받아 curPage 초기값으로  */
  return (
    <div className={style.container}>
      {/* MainPageSaying 컴포넌트 */}
      <MainPageSaying/>
      <div className={style.category_container}>
        <div className={style.category_bar}>
        
        {/* 현재페이지(curPage)에 따라 색 변경 */}   
        <div className={style.category_all} onClick={()=>{goAllPage()}}
                                            style={page === 0
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>전체</div>
        <div className={style.category_health} onClick={()=>{goHealthPage()}} 
                                            style={page === 1
                                           ?{backgroundColor:'#FFBF31',color:'white'}
                                           :{backgroundColor:'white', color:'#404040'}}>건강</div>
        <div className={style.category_study} onClick={()=>{goStudyPage()}}
                                            style={page === 2
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>학습</div>
        <div className={style.category_economy} onClick={()=>{goEconomyPage()}}
                                            style={page === 3
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>경제</div>
        <div className={style.category_relationship} onClick={()=>{goRelationshipPage()}}
                                            style={page === 4
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>인간관계</div>
        <div className={style.category_love} onClick={()=>{goLovePage()}}
                                            style={page === 5
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