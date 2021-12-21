import style from './MyLikedPostingBox.module.css'

function MyLikedPostingBox({post}){
  return (
    <div id={style.post}>{post.image}</div>
  )
}

export default MyLikedPostingBox;