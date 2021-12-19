import style from './LoginModal.module.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showLoginModal, showSignupModal } from '../../store/modal-slice';

function LoginModal(){
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <div className={style.containerbg} onClick={() => dispatch(showLoginModal(false))}/>
      <div className={style.modalbox}>
        {/* 로고 박스 */}
        <div className={style.logobox}>
        <Link to='/mainpage'><div id ={style.logo} onClick={() => dispatch(showLoginModal(false))}/></Link>
          <div className={style.logotitle}>로그인</div>
        </div>

        {/* 인풋 박스 */}
        <div className={style.inputbox}>
          <div className={style.subtitle}>이 메 일</div>
          <input type='text' className={style.input} />
          <div className={style.subtitle}>비 밀 번 호</div>
          <input type='password' className={style.input} />
        </div>

        {/* 버튼 박스 */}
        <div className={style.buttonbox}>
          <Link to='/mypage'><div className={style.loginbutton} onClick={() => dispatch(showLoginModal(false))}>로 그 인</div></Link>
        </div>
        
        {/* 텍스트 박스 */}
        <div className={style.textbox}>
          <div className={style.text} onClick={() => {
              dispatch(showLoginModal(false));
              dispatch(showSignupModal(true));
            }}>회 원 가 입</div>
        </div>
      </div>
    </div>
  )
}
export default LoginModal;