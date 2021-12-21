import style from'./MyPosting.module.css'
import health from '../../images/health-square-2.png'
import study from '../../images/category_study.png'
import economy from '../../images/economy-square.jpg'
import relationship from '../../images/relationship-square.jpg'
import love from '../../images/love-square.jpg'
function MyPostingBox({post}){

  let categoryImage = [health,study,economy,relationship,love];
  let array = ['건강','학습','경제','인간관계','사랑']

    return (
      <div id={style.changing_area}>
      <div id={style.posts_wrap}>
      <div className = {style.posts}>
      <div id={style.post}></div>
      </div>   
      </div>
      </div>
    )
}
export default MyPostingBox;