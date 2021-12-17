import MyPageCategory from '../components/MyPage/MyPageCategory.js';
import MyEditPage from './MyEditPage.js';
import {Routes, Route, Link} from 'react-router-dom';
import MyPosting from '../components/MyPage/MyPosting'
import MySaying from '../components/MyPage/MySaying'
import style from '../pages/MyPage.module.css'
import MyComment from '../components/MyPage/MyComment'
import MyLike from '../components/MyPage/MyLike'
function MyPage(){
    return (
        <div id={style.container}>
            {/*왼쪽 사용자 영역*/}
        <div id={style.user_container}>
        <div id={style.user_profile_wrapper}>
        <div id={style.user_mini_wrapper}>
        <div id={style.profile_image}></div>
        <div id={style.user_name}>꼬부기</div>
        </div>
        </div>
        <div id={style.message_wrapper}>
            <div id={style.message}>
            평생 다이어트중
            </div>
        </div>
        <div className = {style.buttons}>
            <Routes>
                <Route path='/editpage' element={<MyEditPage/>}></Route>
            </Routes>
        <Link to ='/editpage'><button id={style.profile_setting}>프로필 설정</button></Link>
        <Link to ='/mainpage'><button id= {style.logout}>로그아웃</button></Link>
        </div>
        </div>
         {/*오른쪽 카테고리영역*/}
        <div id={style.posts_container}>
        <div id={style.category_wrapper}>
        <MyPageCategory/>
        </div>

        <div id={style.posts_board}>
        <div id={style.myposting_wrapper}>
        {/*onClick구현전까지 아래 주석 지우지마세용ㅜ*/}

        {/* <MyPosting/> */}
        <div id={style.saying_box_wrapper}>
         {/* <MySaying/> */}
         </div>
         {/* <MyComment/> */}
         <MyLike/>
        </div>
        </div>

        </div>
        </div>
    )
}

export default MyPage;