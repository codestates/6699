import style from './Saying.module.css';

import health from '../../images/category_health.png';
import study from '../../images/category_study.png';
import economy from '../../images/category_economy.png';
import relationship from '../../images/category_relationship.png';
import love from '../../images/category_love.png';

import ex_health1 from '../../images/sweat1.png';
import ex_study1 from '../../images/category_study.png';
import ex_economy1 from '../../images/category_economy.png';
import ex_relationship1 from '../../images/category_relationship.png'
import ex_love1 from '../../images/category_love.png'

import ex_health2 from '../../images/sweat2.png';
import ex_study2 from '../../images/category_study.png';
import ex_economy2 from '../../images/category_economy.png';
import ex_relationship2 from '../../images/category_relationship.png'
import ex_love2 from '../../images/category_love.png'

import ex_health3 from '../../images/sweat3.png';
import ex_study3 from '../../images/category_study.png';
import ex_economy3 from '../../images/category_economy.png';
import ex_relationship3 from '../../images/category_relationship.png'
import ex_love3 from '../../images/category_love.png'

import { connect } from "react-redux";
import {minus, plus} from '../../store/landingSlice';
import {Link} from 'react-router-dom';

function Saying({store,plusCount,minusCount}){
  /* 이미지 묶음 */
  let jumboImage = [health,health,study,economy,relationship,love];
  let ex1Image = [ex_health1,ex_health1,ex_study1,ex_economy1,ex_relationship1,ex_love1]
  let ex2Image = [ex_health2,ex_health2,ex_study2,ex_economy2,ex_relationship2,ex_love2]
  let ex3Image = [ex_health3,ex_health3,ex_study3,ex_economy3,ex_relationship3,ex_love3]

  /* 왼쪽, 오른쪽 버튼 함수 */
  function leftClick(e){
    store.page > 1
    &&minusCount(store.page)
    }
  function rightClick(e){
    store.page < 5
    &&plusCount(store.page)
  }
 return (
  <div className={style.container} >
     {/* 대문, store.page에 따라 이미지 변경 */}
    <div className={style.jumbotron} style={{backgroundImage:`url(${jumboImage[store.page]})`}}>
      <div className={style.left_arrow} onClick={leftClick}/>
      <div className={style.right_arrow} onClick={rightClick}/>
      <div className={style.left_66}/>
      <div className={style.right_99}/>
      <Link className={style.saying_link} to ='/mainpage'>
      <div className={style.saying}>{store.page
       ?store.saying[store.page]:store.saying[store.page]}</div></Link>

      {/* 슬라이드바, store.page에 따라 색상 변경 */}
      <div className={style.slidebar} >
        <div className={style.bid1} style={store.page === 1
                                           ?{backgroundColor:'#FFBF31'}
                                           :store.page === 0
                                           ?{backgroundColor:'#FFBF31'}
                                           :{backgroundColor:'white'}}/>
        <div className={style.bid2} style={store.page === 2
                                           ?{backgroundColor:'#FFBF31'}
                                           :{backgroundColor:'white'}}/>
        <div className={style.bid3} style={store.page === 3
                                           ?{backgroundColor:'#FFBF31'}
                                           :{backgroundColor:'white'}}/>
        <div className={style.bid4} style={store.page === 4
                                           ?{backgroundColor:'#FFBF31'}
                                           :{backgroundColor:'white'}}/>
        <div className={style.bid5} style={store.page === 5
                                           ?{backgroundColor:'#FFBF31'}
                                           :{backgroundColor:'white'}}/>
      </div>
    </div>
    {/* 인증글, store.page에 따라 이미지, 글귀 변경 */}
    <div className={style.example1}>
        <div className={style.ex1_image} style={{backgroundImage:`url(${ex1Image[store.page]})`}}/>
        <div className={style.ex1_mention}>
        {store.example1[store.page]}
        </div>
      </div>
      <div className={style.example2}>
        <div className={style.ex2_image} style={{backgroundImage:`url(${ex2Image[store.page]})`}}/>
        <div className={style.ex2_mention}>
        {store.example2[store.page]}
        </div>
      </div>
      <div className={style.example3}>
        <div className={style.ex3_image} style={{backgroundImage:`url(${ex3Image[store.page]})`}}/>
        <div className={style.ex3_mention}>
        {store.example3[store.page]}
        </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Saying);