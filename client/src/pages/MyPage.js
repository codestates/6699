import Header from '../components/Header.js'
import MyPageCategory from '../components/MyPageCategory.js';
import Footer from '../components/Footer.js'
import '../pages/MyPage.css'

function MyPage(){
    return (
        <div>
        <Header/>
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
        <button id= 'mypage-logout'>로그아웃</button>
        </div>
        </div>
        <div id='mypage-posts-container'>
        <div id='mypage-category-wrapper'>
        <MyPageCategory/>
        </div>
        <div id='mypage-posts-wrapper'>
        <div id='mypage-post'></div>
        <div id='mypage-post'></div>
        <div id='mypage-post'></div>
        <div id='mypage-post'></div>
        <div id='mypage-post'></div>
        <div id='mypage-post'></div>
        </div>
        <button id='mypage-'></button>
        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default MyPage;