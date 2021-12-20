import style from './MySayingBox.module.css'
import health from '../../images/health-square-2.png'
import study from '../../images/category_study.png'
import economy from '../../images/economy-square.jpg'
import relationship from '../../images/relationship-square.jpg'
import love from '../../images/love-square.jpg'
function MySayingBox({saying}){

  let categoryImage = [health,study,economy,relationship,love];
  let array = ['건강','학습','경제','인간관계','사랑']
 return (
    <div className={style.box}>
    <div className={style.category_image}>{categoryImage[array.indexOf(saying.category)]}</div>
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
   </div>
 )   
}
export default MySayingBox;