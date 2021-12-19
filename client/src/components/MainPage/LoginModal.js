import style from './LoginModal.module.css';
import React, { useState, useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { showLoginModal, showSignupModal } from '../../store/ModalSlice';
import { login, getUserInfo } from '../../store/AuthSlice';
import { REACT_APP_API_URL } from '../../config';

function LoginModal(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [infoIsValid, setInfoIsValid] = useState(false);

  const inputEmailIsValid = inputEmail.trim() !== '';
  const inputPwIsValid = inputPassword.trim() !== '';

  useEffect(() => {
    if (inputEmailIsValid && inputPwIsValid) {
      setInfoIsValid(true);
    } else {
      setInfoIsValid(false);
    }
  }, [inputEmailIsValid, inputPwIsValid]);

  const handleLogin = () => {
    axios
      .post(
        `${REACT_APP_API_URL}/login`,
        {
          email: inputEmail,
          password: inputPassword
        },
        { withCredentials: true }
      )
      .then((res)=>{
        dispatch(getUserInfo(res.data.userInfo));
        dispatch(login());
        dispatch(showLoginModal(false));
        navigate('/mypage');
      });
  };

  const emailChangeHandler = (e) => {
    setInputEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setInputPassword(e.target.value);
  };

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
          {inputEmailIsValid && <div className={style.error}>이메일이 잘못 되었습니다.</div>}
          {inputPwIsValid && <div className={style.error}>비밀번호가 틀립니다.</div>}
        </div>

        {/* 버튼 박스 */}
        <div className={style.buttonbox}>
          <div 
            className={style.loginbutton} 
            disabled={!infoIsValid}
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