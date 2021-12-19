import style from './SignupModal.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showLoginModal, showSignupModal } from '../../store/ModalSlice';
import ServiceModal from './ServiceModal';
import PrivacyModal from './PrivacyModal';

function SignupModal(){
  const dispatch = useDispatch();

  /*개인정보 상태*/
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  /*약관 모달 상태*/
  const [serviceOpen, setService] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  /*유효성 검사 상태*/
  const [emailErr, setEmailErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);

  /*약관 모달 핸들러*/
  const serviceModalHandler = () => { 
    setService(!serviceOpen);
  };
  const privacyModalHandler = () => {
    setPrivacyOpen(!privacyOpen);
  };

  /*이메일 에러 핸들러*/
  const emailErrCheck = (email) => {
    const emailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (email === ''){
      setEmailErr(false);
      return false;
    }
    if (!emailExp.test(email)){
      setEmailErr(true);
      return false;
    }
    setEmailErr(false);
    return true;
  };

  /*유저네임 에러 핸들러*/
  const nameErrCheck = (username) => {
    const usernameExp = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;
    if (username === ''){
      setNameErr(false);
      return false;
    }
    if (!usernameExp.test(username)){
      setNameErr(true);
      return false;
    }
    setNameErr(false);
    return true;
  };

  /*비밀번호 에러 핸들러*/
  const passwordErrCheck = (password) => {
    let passwordExp = /^[a-zA-z0-9]{6,12}$/;
    if (password === '') {
      setPasswordErr(false);
      return false;
    }
    if (!passwordExp.test(password)) {
      setPasswordErr(true);
      return false;
    }
    setPasswordErr(false);
    return true;
  };

  /*비밀번호 확인 에러 핸들러*/
  const confirmPasswordErrCheck = (password, confirmPassword) => {
    if (password === '') {
      setConfirmPasswordErr(false);
      return false;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordErr(true);
      return false;
    }
    setConfirmPasswordErr(false);
    return true;
  };

  /*인풋 입력 핸들러*/
  const handleInputValue = (key) => (e) => {
    const info = { ...signupInfo, [key]: e.target.value };
    setSignupInfo(info);
    isAllValid(info);
  };
  
  /*입력값 유효성 검사 핸들러*/
  const isAllValid = (signupInfo) => {
    const { email, username, password, confirmPassword } = signupInfo;

    const isEmailValid = emailErrCheck(email);
    const isNameValid = nameErrCheck(username);
    const isPasswordValid = passwordErrCheck(password);
    const isConfirmPasswordValid = confirmPasswordErrCheck(
      password,
      confirmPassword
    );

    return isEmailValid && isNameValid && isPasswordValid && isConfirmPasswordValid ? true : false;
  };

  return (
    <div className={style.container}>
      {serviceOpen && (<ServiceModal serviceModalHandler={serviceModalHandler} />)}
      {privacyOpen && (<PrivacyModal privacyModalHandler={privacyModalHandler} />)}
      <div className={style.containerbg} onClick={() => dispatch(showSignupModal(false))}/>
      <div className={style.modalbox}>
        {/* 로고 박스 */}
        <div className={style.logobox}>
          <div id ={style.logo} />
          <div className={style.logotitle}>회원가입</div>
        </div>
        {/* 인풋 박스 */}
        <div className={style.inputbox}>
          <div className={style.subtitle}>이 메 일</div>
          <input 
            type='text' 
            className={style.input}
            value={signupInfo.email}
            onChange={handleInputValue('email')}
          />
          <div className={style.subtitle}>닉 네 임</div>
          <input 
            type='text' 
            className={style.input} 
            value={signupInfo.username}
            onChange={handleInputValue('username')}
          />
          <div className={style.subtitle}>비 밀 번 호</div>
          <input 
            type='password' 
            className={style.input_password}
            value={signupInfo.password}
            onChange={handleInputValue('password')}
          />
          <div className={style.subtitle}>비 밀 번 호 확 인</div>
          <input 
            type='password' 
            className={style.input_password} 
            value={signupInfo.confirmPassword}
            onChange={handleInputValue('confirmPassword')}
          />
        </div>
        {/* 에러 박스*/}
        <div className={style.errorbox}>
          <div className={emailErr ? style.error : style.hidden}>잘못된 이메일 형식 입니다.</div>
          <div className={nameErr ? style.error : style.hidden}>닉네임은 한글, 영문, 숫자만 가능하며 2-10자리로 입력해야 합니다.</div>
          <div className={passwordErr ? style.error : style.hidden}>비밀번호는 영문, 숫자만 가능하며 6~12자리로 입력해야 합니다.</div>
          <div className={confirmPasswordErr ? style.error : style.hidden}>두 비밀번호가 일치하지 않습니다.</div>
        </div>
        {/* 텍스트 박스 */}
        <div className={style.textbox}>
          <input type="checkbox" className={style.checkbox}/>
          <label className={style.text}>[필수] 6699 이용약관 동의</label>
          <div className={style.info} onClick={serviceModalHandler}>[자세히 보기]</div>  
          <input type="checkbox" className={style.checkbox}/>
          <label className={style.text}>[필수] 개인정보 수집 및 이용 동의</label>
          <div className={style.info} onClick={privacyModalHandler}>[자세히 보기]</div>
        </div>
        {/* 버튼 박스 */}
        <div className={style.buttonbox}>
          <div className={style.button}>가 입 하 기</div>
          <div className={style.button} onClick={() => {
              dispatch(showSignupModal(false));
              dispatch(showLoginModal(true));
            }}>취 소</div>
        </div>
      </div>
    </div>
  )
}
export default SignupModal;