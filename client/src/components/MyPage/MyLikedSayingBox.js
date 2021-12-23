import style from './MyLikedSayingBox.module.css'

function MyLikedSayingBox({sayings,loading}){
  
  if(loading){
    return <h2>loading...</h2>
  }
  
 return (
  <div id={style.saying_wrap}>
      {sayings.map(saying => (
       <li key ={saying.id} className={style.saying}>
       {saying.category === '건강' ?
       (<div className={style.category_image} id={style.health}></div>):(null)}
       {saying.category === '학습' ?
       (<div className={style.category_image} id={style.study}></div>):(null)}
       {saying.category === '경제' ?
       (<div className={style.category_image} id={style.economy}></div>):(null)}
       {saying.category === '인간관계' ?
       (<div className={style.category_image} id={style.relationship}></div>):(null)}
       {saying.category === '사랑' ?
       (<div className={style.category_image} id={style.love}></div>):(null)}
        <div id={style.trashcan}></div>

       <div id={style.set_title_middle_box}>
    <div className={style.title}>
    <div id={style.icon_66}></div>
    <p id={style.saying}>{saying.content}</p>
    <div id={style.icon_99}></div>
    </div>
    </div>

      <div className={style.icon_box}>
      <div id={style.heart}></div>
      <div id={style.post}></div>
     </div>
     </li>
  ))}
  </div>
 )   
}
export default MyLikedSayingBox;