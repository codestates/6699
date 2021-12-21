import style from './PostingMakeCommentBox.module.css'

function PostingMakeCommentBox(){
  
 return (
  <div className={style.comment_writting_container}>
  <div id={style.writting_comment_border}>
   <div id={style.user_image}></div>
   <input placeholder='댓글을 작성해주세요'></input>
  </div>
  <button id={style.make_comment}>게시하기</button>
  </div>
 )
}

export default PostingMakeCommentBox;

