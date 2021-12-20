import style from'./MyPosting.module.css'
import MyPagePagenation from './MyPagePagenation'
import {setArticles} from '../../store/MySlice'
import {useSelector} from 'react-redux'

function MyPosting(){
const articles = useSelector((state) => state.mypage.articles);

//포스트 가져오는 박스 만들기 그후에 거기에서 보여주기
    return (
        <div id={style.changing_area}>
         <div id={style.posts_wrap}>
          {/* <div className = {style.posts}>
            {articles.length >0 ? articles.map((el)=>
             <div id={style.post} key={el.id}>
                {el}
             </div>
            ):('내가 작성한 게시물이 없어요')}
          </div> */}
         </div>
         <div id={style.pagenation_wrapper}>
         <MyPagePagenation/>
         </div>
        </div>
    )
}
export default MyPosting;