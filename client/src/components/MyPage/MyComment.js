import style from './MyComment.module.css'
import MyCommentBox from './MyCommentBox'
import PageNation from './MyPagePagenation'
import{useSelector,useDispatch} from 'react-redux';

function MyComment(){
const { comments } = useSelector((state) => state.mypage);
console.log(comments)
    return (
<div id={style.changing_area}>
  {/* {comments.length > 0 ? comments.map((el)=>
  <MyCommentBox
   comment={el}
   key={el.id}
   />
  ):("내가 작성한 댓글이 없어요")} */}
 
<div className={style.outer_wrapper}>
 <div id={style.pagenation_wrapper}>
  <PageNation/>
 </div>
</div>
</div>
       
    )
}
export default MyComment;