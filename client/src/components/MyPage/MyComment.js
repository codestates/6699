import style from './MyComment.module.css'
import MyCommentBox from './MyCommentBox'
import PageNation from './MyPagePagenation'
function MyComment({comments}){
    return (
<div id={style.changing_area}>
 <div className={style.box_wrapper}>
  {comments.length >0 ? comments.map((el)=>
  <MyCommentBox
  comment= {el}
  key= {el.key}
  />)
  :('내가 쓴 댓글이 없어요')}
 </div>
<div className={style.outer_wrapper}>
 <div id={style.pagenation_wrapper}>
  <PageNation/>
 </div>
</div>
</div>
       
    )
}
export default MyComment;