import style from './LoginModal.module.css';
import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { showLoginModal, showSignupModal } from '../../store/ModalSlice';
import { login, getUserInfo } from '../../store/AuthSlice';
import { REACT_APP_API_URL } from '../../config';

function LoginModal(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  /* 인풋 정보 상태 */
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [infoIsValid, setInfoIsValid] = useState(false);

  /* 로그인 핸들러 */
  const handleLogin = async () => {
    try {
      /* response 변수에 /login 서버 응답결과를 담는다 */
      const response = await axios.post(
        `${REACT_APP_API_URL}/auth/login`,
        { email: inputEmail, password: inputPassword },
        { withCredentials: true }
      );
      /* 서버의 응답결과에 data.data.userInfo가 들어있다면 로그인 성공*/
      if(response.data.data.userInfo){
        setInfoIsValid(false);
        dispatch(getUserInfo(response.data.data.userInfo));
        dispatch(login());
        dispatch(showLoginModal(false));
        navigate('/mainpage');
      }
    } catch(err) {
      /* 상태코드 403번 에러 반환시 상태 변경 */
      if(err.response.status === 400) alert('𝟲𝟲𝟵𝟵\n빈칸을 모두 작성해주세요! 😖');
      if(err.response.status === 403) setInfoIsValid(true);
    }
  };

  /* 인풋 체인지 핸들러 */
  const emailChangeHandler = (e) => {
    setInputEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setInputPassword(e.target.value);
  };

  return (
    <div className={style.container}>
      {/* 모달 뒷배경 박스(클릭시 모달 상태변경) */}
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
          <input 
            type='text' 
            className={style.input} 
            onChange={emailChangeHandler}
            value={inputEmail}
          />
          <div className={style.subtitle}>비 밀 번 호</div>
          <input 
            type='password' 
            className={style.input} 
            onChange={passwordChangeHandler}
            value={inputPassword}
          />
        </div>

        {/* 에러 박스 */}
        <div className={style.errorbox}>
          {infoIsValid && <div className={style.error}>로그인 정보가 잘못 되었습니다.</div>}
        </div>

        {/* 버튼 박스 */}
        <div className={style.buttonbox}>
          <div 
            className={style.loginbutton} 
            onClick={handleLogin}
          >로 그 인</div>
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