import style from'./MainPostingBox.module.css'
import health from '../../images/health-square-2.png'
import study from '../../images/category_study.png'
import economy from '../../images/economy-square.jpg'
import relationship from '../../images/relationship-square.jpg'
import love from '../../images/love-square.jpg'
function MainPostingBox({posts,loading}){

  if(loading){
    return <h2 className={style.noPost}>loading...</h2>
  }
    if(posts.length > 0){
    console.log(posts);
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
    }else return (
    <div className = {style.noPost}>
      게시물이 없습니다.
    </div>)
}
export default MainPostingBox;