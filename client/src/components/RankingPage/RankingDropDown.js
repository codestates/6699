import style from './RankingDropDown.module.css';
function RankingDropDown({dropDownOff,clickAll,clickHealth,clickStudy,clickEconomy,clickRelationship,clickLove}){
  return(
    <div>
      <div className={style.box_bg } onClick ={dropDownOff}/>  
      <div className={style.box}>
        <div className={style.all} onClick={clickAll}>전체</div>
        <div className={style.health} onClick={clickHealth}>건강</div>
        <div className={style.study} onClick={clickStudy}>학습</div>
        <div className={style.economy} onClick={clickEconomy}>경제</div>
        <div className={style.relationship} onClick={clickRelationship}>인간관계</div>
        <div className={style.love}onClick={clickLove}>사랑</div>
      </div>
    </div>  
  )
}
export default RankingDropDown;