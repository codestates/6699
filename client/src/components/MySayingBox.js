import style from '../components/MySayingBox.module.css'
function MySayingBox(){
 return (
    <div className={style.box}>
    <div className={style.category_image}></div>
    <div id={style.trashcan}></div>
   
   <div id={style.set_title_middle_box}>
    <div className={style.title}>
    <div id={style.icon_66}></div>
    <p id={style.saying}>1일1식</p>
    <div id={style.icon_99}></div>
    </div>
    </div>

    <div className={style.icon_box}>
    <div id={style.heart}></div>
    <div id={style.post}></div>
   </div>
   </div>
 )   
}
export default MySayingBox;