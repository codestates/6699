import style from'./MyPostingBox.module.css'
import health from '../../images/health-square-2.png'
import study from '../../images/category_study.png'
import economy from '../../images/economy-square.jpg'
import relationship from '../../images/relationship-square.jpg'
import love from '../../images/love-square.jpg'
function MyPostingBox({posts,loading}){

  if(loading){
    return <h2>loading...</h2>
  }

    return (
      // <div id={style.post}>{post.image}</div>
      <ul>
      {posts.map(post => (
        <li key ={post.id} id={style.post}>
          {post.title}
        </li>
      ))}
      </ul>
    )
}
export default MyPostingBox;