import React from 'react'
import style from './Saying.module.css';
function Saying(){
 return (
  <div>
     {/* Jumbotron Zone */}
    <div className={style.jumbotron}>
      <div className={style.left_arrow}/>
      <div className={style.right_arrow}/>
      <div className={style.left_66}/>
      <div className={style.right_99}/>

      <div className={style.saying}>땀은 지방의 눈물이다.</div>

      {/* Slide Bar Zone */}
      <div className={style.slidebar}>
        <div className={style.bid1}/>
        <div className={style.bid2}/>
        <div className={style.bid3}/>
        <div className={style.bid4}/>
        <div className={style.bid5}/>
      </div>
    </div>
  </div>
 )
}
export default Saying;