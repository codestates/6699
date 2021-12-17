import {Routes, Route, Link} from 'react-router-dom';
import '../pages/MyEditPage.css'
function MyEditPage (){
    return (
        <div id='my-edit-container'>

        <div id='my-edit-user-container'>
        <div id='my-edit-user-profile-wrapper'>
        <div id='my-edit-user-mini-wrapper'>
        <div id='my-edit-profile-image'></div>
        <div id='my-edit-user-name'>꼬부기</div>
        </div>
        </div>
        <div id='my-edit-message-wrapper'>
            <div id='my-edit-message'>
            평생 다이어트중
            </div>
        </div>
        <div className = 'my-edit-buttons'>
        <button id='my-edit-profile-setting'>프로필 설정</button>
        <Link to ='/mainpage'><button id= 'my-edit-logout'>로그아웃</button></Link>
        </div>
        </div>
         <div id='my-edit-setting-container'>
        <div id='my-edit-setting-outer-wrap'>
            <div className='my-edit-info'>
            <p id='my-edit-title'>계정 설정</p>
            <p id='my-edit-explain'>회원정보를 수정합니다.</p>
            </div>
            <div id='my-edit-setting-inner-wrap'>
                <p className='my-edit-text'>이메일</p>
                <textarea className='my-edit-textarea'/>
                <p className='my-edit-text'>닉네임 변경</p>
                <textarea className='my-edit-textarea'/>
                <p className='my-edit-text'>비밀번호 수정</p>
                <textarea className='my-edit-textarea'/>
                <p className='my-edit-text'>비밀번호 수정 확인</p>
                <textarea className='my-edit-textarea'/>
                <div className='my-edit-buttons'>
                <button>프로필 변경</button>
                <button>변경 취소</button>
                </div>
            </div>
            <button id='my-edit-resign-btn'>회원 탈퇴</button>
        </div>
        </div> 
        </div>
    )
}
export default MyEditPage