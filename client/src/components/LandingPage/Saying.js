import style from './Saying.module.css';
import React, { useState }from 'react';

import { connect } from "react-redux";
import {minus, plus} from '../../store/Store';

function Saying({store,plusCount,minusCount}){

  function leftClick(e){
    console.log(store.count)
    console.log(store.image[store.count])
    store.count > 1
    ?minusCount(store.count)
    :console.log('minPage')
    }
  function rightClick(e){
    console.log(store.count);
    console.log(store.image[store.count])
    store.count < 5
    ?plusCount(store.count)
    :console.log('maxPage')
  }
 return (

  <div className={style.container}>
     {/* Jumbotron Zone */}
    <div className={style.jumbotron}>
      <div className={style.left_arrow} onClick={leftClick}/>
      <div className={style.right_arrow} onClick={rightClick}/>
      <div className={style.left_66}/>
      <div className={style.right_99}/>
      <div className={style.saying}>땀은 지방의 눈물이다.</div>

      {/* Slide Bar Zone */}
      <div className={style.slidebar} >
        <img className={style.bid1} src={`${store.image[store.count]}`}/>
        <div className={style.bid2}/>
        <div className={style.bid3}/>
        <div className={style.bid4}/>
        <div className={style.bid5}/>
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