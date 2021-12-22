import style from './MySayingBox.module.css'
import health from '../../images/health-square-2.png'
import study from '../../images/category_study.png'
import economy from '../../images/economy-square.jpg'
import relationship from '../../images/relationship-square.jpg'
import love from '../../images/love-square.jpg'

function MySayingBox({sayings,loading}){
  let categoryImage = [health,study,economy,relationship,love];
  let array = ['건강','학습','경제','인간관계','사랑']

  if(loading){
    return <h2>loading...</h2>
  }

 return (
  <ul>
  {sayings.map(post => (
    <li key ={post.id} id={style.post}>
      {post.title}
    </li>
  ))}
  </ul>
 )   
}
export default MySayingBox;