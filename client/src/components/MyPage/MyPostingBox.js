import style from'./MyPostingBox.module.css'

function MyPostingBox({posts,loading}){

  if(loading){
    return <h2>loading...</h2>
  }

    return (
      <div id={style.container}>
        <div id={style.posts_wrap}>
      {posts.map(post => (
        <li key ={post.id} className={style.post}
        id={post.saying.category === '건강'? 
        style.health : 
        post.saying.category === '학습'?
         style.study :
        post.saying.category === '경제'?
         style.economy:
        post.saying.category === '인간관계'?
         style.relationship:
        post.saying.category === '사랑'?
         style.love : null}>
          <div>
             <div className={style.thumbnail}>
               {post.title}
            </div>
          </div>
        </li>
      ))}
      </div>
      </div>
    )
}
export default MyPostingBox;