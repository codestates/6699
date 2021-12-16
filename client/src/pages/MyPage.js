import MyPageCategory from '../components/MyPageCategory.js';
import {Link} from 'react-router-dom';
import '../pages/MyPage.css'

function MyPage(){
    return (
        <div id='mypage-container'>

        <div id='mypage-user-container'>
        <div id='mypage-user-profile-wrapper'>
        <div id='mypage-user-mini-wrapper'>
        <div id='mypage-profile-image'></div>
        <div id='mypage-user-name'>꼬부기</div>
        </div>
        </div>
        <div id='mypage-message-wrapper'>
            <div id='mypage-message'>
            평생 다이어트중
            </div>
        </div>
        <div className = 'mypage-buttons'>
        <button id='mypage-profile-setting'>프로필 설정</button>
        <Link to ='/mainpage'><button id= 'mypage-logout'>로그아웃</button></Link>
        </div>
        </div>
        <div id='mypage-posts-container'>
        <div id='mypage-category-wrapper'>
        <MyPageCategory/>
        </div>
        <div id='mypage-posts-outer-wrap'>
        <div id='mypage-posts-inner-wrap'>
        <div className = 'mypage-posts'>
        <div id='mypage-post'></div>
        <div id='mypage-post'></div>
        <div id='mypage-post'></div>
        </div>
        <div className='mypage-posts'>
        <div id='mypage-post'></div>
        <div id='mypage-post'></div>
        <div id='mypage-post'></div>
        </div>
        </div>
        <div className = 'mypage-page-buttons'>
        <button id='mypage-pagenation'>1</button>
        <button id='mypage-pagenation-2'>2</button>
        </div>
        </div>
        </div>
        </div>
    )
}

export default MyPage;