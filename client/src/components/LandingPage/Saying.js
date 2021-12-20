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

import data from './LandingData';
import {minus, plus} from '../../store/LandingSlice';
import {useSelector, useDispatch } from 'react-redux';

import {Link} from 'react-router-dom';

function Saying(){
  const page = useSelector(state => state.landing.page);
  const dispatch = useDispatch();

  function plusCount(){
    dispatch(plus());
  }
  function minusCount(){
    dispatch(minus());
  }
  /* 이미지 묶음 */
  let jumboImage = [health,health,study,economy,relationship,love];
  let ex1Image = [ex_health1,ex_health1,ex_study1,ex_economy1,ex_relationship1,ex_love1]
  let ex2Image = [ex_health2,ex_health2,ex_study2,ex_economy2,ex_relationship2,ex_love2]
  let ex3Image = [ex_health3,ex_health3,ex_study3,ex_economy3,ex_relationship3,ex_love3]

  /* 왼쪽, 오른쪽 버튼 함수 */
  function leftClick(){
    page > 1
    &&minusCount();
    }
  function rightClick(){
    page < 5
    &&plusCount();
  }
return (
  <div className={style.container} >
     {/* 대문, store.page에 따라 이미지 변경 */}
    <div className={style.jumbotron} style={{backgroundImage:`url(${jumboImage[page]})`}}>
      <div className={style.left_arrow} onClick={leftClick}/>
      <div className={style.right_arrow} onClick={rightClick}/>
      <div className={style.left_66}/>
      <div className={style.right_99}/>
      <Link className={style.saying_link} to ='/mainpage'>
      <div className={style.saying}>{page
       ?data.saying[page]:data.saying[page]}</div></Link>

      {/* 슬라이드바, store.page에 따라 색상 변경 */}
      <div className={style.slidebar} >
        <div className={style.bid1} style={page === 1
                                           ?{backgroundColor:'#FFBF31'}
                                           :page === 0
                                           ?{backgroundColor:'#FFBF31'}
                                           :{backgroundColor:'white'}}/>
        <div className={style.bid2} style={page === 2
                                           ?{backgroundColor:'#FFBF31'}
                                           :{backgroundColor:'white'}}/>
        <div className={style.bid3} style={page === 3
                                           ?{backgroundColor:'#FFBF31'}
                                           :{backgroundColor:'white'}}/>
        <div className={style.bid4} style={page === 4
                                           ?{backgroundColor:'#FFBF31'}
                                           :{backgroundColor:'white'}}/>
        <div className={style.bid5} style={page === 5
                                           ?{backgroundColor:'#FFBF31'}
                                           :{backgroundColor:'white'}}/>
      </div>
    </div>
    {/* 인증글, store.page에 따라 이미지, 글귀 변경 */}
    <div className={style.example1}>
        <div className={style.ex1_image} style={{backgroundImage:`url(${ex1Image[page]})`}}/>
        <div className={style.ex1_mention}>
        {data.example1[page]}
        </div>
      </div>
      <div className={style.example2}>
        <div className={style.ex2_image} style={{backgroundImage:`url(${ex2Image[page]})`}}/>
        <div className={style.ex2_mention}>
        {data.example2[page]}
        </div>
      </div>
      <div className={style.example3}>
        <div className={style.ex3_image} style={{backgroundImage:`url(${ex3Image[page]})`}}/>
        <div className={style.ex3_mention}>
        {data.example3[page]}
        </div>
      </div>
  </div>
 )
}

function mapDispatchToProps(dispatch){ 
  return {
    plusCount: () => dispatch(plus()),
    minusCount: () => dispatch(minus())
  };
};

export default Saying;