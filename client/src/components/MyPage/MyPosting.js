import style from'./MyPosting.module.css'
import MyPagePagenation from './MyPagePagenation'
function MyPostingPage(){
    return (
        <div id={style.changing_area}>
        <div id={style.posts_wrap}>
        <div className = {style.posts}>
        <div id={style.post}></div>
        <div id={style.post}></div>
        <div id={style.post}></div>
        </div>
        <div className={style.posts}>
        <div id={style.post}></div>
        <div id={style.post}></div>
        <div id={style.post}></div>
        </div>
        </div>
        <div id={style.pagenation_wrapper}>
        <MyPagePagenation/>
        </div>
        </div>
    )
}
export default MyPostingPage