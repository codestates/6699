import {Routes, Route, Link} from 'react-router-dom';
import style from '../pages/MyEditPage.module.css'
function MyEditPage (){
    return (
        <div id={style.container}>
            <div id={style.user_container}>
                <div id={style.user_profile_wrapper}>
                    <div id={style.user_mini_wrapper}>
                        <div id={style.profile_image} />
                        <div   div id={style.user_name}>꼬부기</div>
                    </div>
                </div>
                <div id={style.message_wrapper}>
                    <div id={style.message}>
                        평생 다이어트중
                    </div>
                </div>
                <div className = {style.buttons_1}>
                    <button id={style.profile_setting}>프로필 설정</button>
                    <Link to ='/mainpage'><button id= {style.logout}>로그아웃</button></Link>
                </div>
            </div>

        <div id={style.setting_container}>
            <div id={style.setting_outer_wrap}>
                <div className={style.info}>
                    <p id={style.title}>계정 설정</p>
                    <p id={style.explain}>회원정보를 수정합니다.</p>
                </div>
                <div id={style.setting_inner_wrap}>
                    <p className={style.text}>이메일</p>
                    <input type='text' className={style.textarea}/>
                    <p className={style.text}>닉네임 변경</p>
                    <input type='text' className={style.textarea}/>
                    <p className={style.text}>비밀번호 수정</p>
                    <input type='password' className={style.textarea}/>
                    <p className={style.text}>비밀번호 수정 확인</p>
                    <input type='password' className={style.textarea}/>
                    <div className={style.buttons_2}>
                        <button id={style.btn1}>프로필 변경</button>
                        <button id={style.btn2}>변경 취소</button>
                    </div>
                </div>
                <button id={style.resign_btn}>회원 탈퇴</button>
            </div>
        </div> 
    </div>
    )
}
export default MyEditPage