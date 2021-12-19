import style from './MainPage.module.css'
import MainPageSaying from '../components/MainPage/MainPageSaying';
import Post from '../components/MainPage/Post';
import PostBox from '../components/MainPage/PostBox';
import Footer from '../components/Footer';
import React,{useState} from 'react';
import { connect } from "react-redux";
import {minus, plus} from '../store/landingSlice';
function MainPage({store}){
  /* 랜딩페이지에서 누른 명언 페이지 숫자를 받아 curPage 초기값으로  */
  let [curPage,setPage] = useState(store.page);
  return (
    <div className={style.container}>
      {console.log(curPage)}
      {/* MainPageSaying 컴포넌트로 현재페이지 상태 props 전달 */}
      <MainPageSaying curPage={curPage}/>
      <div className={style.category_container}>
        <div className={style.category_bar}>
        
        {/* 현재페이지(curPage)에 따라 색 변경 */}   
        <div className={style.category_all} onClick={()=>{setPage(0)}} 
                                            style={curPage === 0
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>전체</div>
        <div className={style.category_health} onClick={()=>{setPage(1)}} 
                                            style={curPage === 1
                                           ?{backgroundColor:'#FFBF31',color:'white'}
                                           :{backgroundColor:'white', color:'#404040'}}>건강</div>
        <div className={style.category_study} onClick={()=>{setPage(2)}}
                                            style={curPage === 2
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>학습</div>
        <div className={style.category_economy} onClick={()=>{setPage(3)}}
                                            style={curPage === 3
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>경제</div>
        <div className={style.category_relationship} onClick={()=>{setPage(4)}}
                                            style={curPage === 4
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>인간관계</div>
        <div className={style.category_love} onClick={()=>{setPage(5)}}
                                            style={curPage === 5
                                            ?{backgroundColor:'#FFBF31',color:'white'}
                                            :{backgroundColor:'white', color:'#404040'}}>사랑</div>
      </div>

      </div>

      {/* 좋아요 토글 */}                                          
      <Post curPage={curPage} />
      {/* 게시물 묶음 */}   
      <PostBox curPage={curPage}/>
      <div className={style.footer}>
      {/* 푸터 */}   
        <Footer/>
      </div>
    </div>
  )
}
function mapStateToProps(state)
{return {
  store: state
}};
function mapDispatchToProps(dispatch)
{ return {
  plusCount: () => dispatch(plus()),
  minusCount: () => dispatch(minus())
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);