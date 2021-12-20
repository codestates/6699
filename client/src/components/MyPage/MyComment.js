import style from './MyComment.module.css'
import MyCommentBox from './MyCommentBox'
import PageNation from './MyPagePagenation'
import{useSelector,useDispatch} from 'react-redux';

function MyComment(){
const { comments } = useSelector((state) => state.mypage);
console.log('comments',comments)
    return (
<div id={style.changing_area}>
 <div className={style.box_wrapper}>
  <MyCommentBox/>
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