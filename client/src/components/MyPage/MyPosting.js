import style from'./MyPosting.module.css'
import MyPagePagenation from './MyPagePagenation'
import {setArticles} from '../../store/MySlice'
import {useSelector} from 'react-redux'
import MyPostingBox from './MyPostingBox';

function MyPosting(){
const articles = useSelector((state) => state.mypage.articles);

    return (
        <div id={style.changing_area}>
         <div id={style.posts_wrap}>
             {/* {articles.length >0 ? articles.map((el)=>
             <MyPostingBox
             post={el}
             key={el.id}
             />):("나의 게시물이 없어요")} */}
         </div>
         <div id={style.pagenation_wrapper}>
         <MyPagePagenation/>
         </div>
        </div>
    )
}
export default MyPosting;