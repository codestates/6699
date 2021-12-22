import style from './MyLikedPostingBox.module.css'

function MyLikedPostingBox({posts,loading}){

  if(loading){
    return <h2>loading...</h2>
  }

  return (
    <ul>
      {posts.map(post => (
        <li key ={post.id} id={style.post}>
          {post.title}
        </li>
      ))}
      </ul>
  )
}

export default MyLikedPostingBox;