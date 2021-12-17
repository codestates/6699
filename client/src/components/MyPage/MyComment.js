import style from './MyComment.module.css'
import MyCommentBox from './MyCommentBox'
import PageNation from './MyPagePagenation'
function MyComment(){
    return (
<div id={style.container}>
<MyCommentBox/>
<MyCommentBox/>
<MyCommentBox/>
<MyCommentBox/>
<MyCommentBox/>
<div className={style.outer_wrapper}>
<div id={style.pagenation_wrapper}>
<PageNation/>
</div>
</div>
</div>
       
    )
}
export default MyComment;