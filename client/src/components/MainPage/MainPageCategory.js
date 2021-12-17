/*****done*****/
import style from './MainPageCategory.module.css'
function MainPageCategory(){
  return (
    <div className={style.container}>
      <div className={style.category_bar}>
        <div className={style.category_all}>전체</div>
        <div className={style.category_health}>건강</div>
        <div className={style.category_study}>학습</div>
        <div className={style.category_economy}>경제</div>
        <div className={style.category_relation}>인간관계</div>
        <div className={style.category_love}>사랑</div>
      </div>
    </div>
  )
}
export default MainPageCategory;