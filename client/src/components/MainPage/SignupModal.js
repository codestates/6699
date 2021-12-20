import style from './SignupModal.module.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showLoginModal, showSignupModal } from '../../store/ModalSlice';
import ServiceModal from './ServiceModal';
import PrivacyModal from './PrivacyModal';
import { REACT_APP_API_URL } from '../../config';

function SignupModal(){
  const dispatch = useDispatch();

  /*개인정보 상태*/
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const { email, username, password, confirmPassword } = signupInfo;

  /*약관 모달 상태*/
  const [serviceOpen, setService] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  /* 체크박스 상태 */
  const [serviceCheck, setServiceCheck] = useState(false);
  const [privacyCheck, setPrivacyCheck] = useState(false);

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
    const passwordExp = /^[a-zA-z0-9]{6,12}$/;
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
    const isConfirmPasswordValid = confirmPasswordErrCheck(password, confirmPassword);

    return isEmailValid && isNameValid && isPasswordValid && isConfirmPasswordValid ? true : false;
  };

  /*입력값 초기화 핸들러*/
  const resetInput = () => {
    setSignupInfo({
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    });
    setEmailErr(false);
    setNameErr(false);
    setPasswordErr(false);
    setConfirmPasswordErr(false);
    setServiceCheck(false);
    setPrivacyCheck(false);
  };

  /* 회원가입 핸들러 */
  const handleSignup = async () => {
      try {
        if (isAllValid(signupInfo)) {
          if(serviceCheck && privacyCheck){
            await axios.post(
              `${REACT_APP_API_URL}/auth/signup`,
              { email, username, password, confirmPassword },
              { withCredentials: true }
            );
            resetInput();
            dispatch(showLoginModal(true));
            dispatch(showSignupModal(false));
            alert('𝟲𝟲𝟵𝟵\n회원가입에 성공하였습니다! 🙂');
          } else{
            alert('𝟲𝟲𝟵𝟵\n약관에 동의해주세요! 😖');
          }
        } else {
          alert('𝟲𝟲𝟵𝟵\n빈칸을 모두 작성해주세요! 😖');
        }
      } catch (err) {
        if(err.response.data.message==='Email Is Already Existed!') alert('𝟲𝟲𝟵𝟵\n이미 존재하는 이메일 입니다! 😥');
        if(err.response.data.message==='Username Is Already Existed!') alert('𝟲𝟲𝟵𝟵\n이미 존재하는 닉네임 입니다! 😥');
    }
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
          <div className={emailErr ? style.error : style.hidden}>잘못된 이메일 형식 입니다.</div>
          <div className={style.subtitle}>닉 네 임</div>
          <input 
            type='text' 
            className={style.input} 
            value={signupInfo.username}
            onChange={handleInputValue('username')}
          />
          <div className={nameErr ? style.error : style.hidden}>닉네임은 한글, 영문, 숫자만 가능하며 2-10자리로 입력해야 합니다.</div>
          <div className={style.subtitle}>비 밀 번 호</div>
          <input 
            type='password' 
            className={style.input_password}
            value={signupInfo.password}
            onChange={handleInputValue('password')}
          />
          <div className={passwordErr ? style.error : style.hidden}>비밀번호는 영문, 숫자만 가능하며 6~12자리로 입력해야 합니다.</div>
          <div className={style.subtitle}>비 밀 번 호 확 인</div>
          <input 
            type='password' 
            className={style.input_password} 
            value={signupInfo.confirmPassword}
            onChange={handleInputValue('confirmPassword')}
          />
          <div className={confirmPasswordErr ? style.error : style.hidden}>두 비밀번호가 일치하지 않습니다.</div>
        </div>
        {/* 에러 박스*/}
        <div className={style.errorbox}>
          
          
          
          
        </div>
        {/* 텍스트 박스 */}
        <div className={style.textbox}>
          <input type="checkbox" className={style.checkbox} onClick={()=>{setServiceCheck(!serviceCheck);}}/>
          <label className={style.text}>[필수] 6699 이용약관 동의</label>
          <div className={style.info} onClick={serviceModalHandler}>[자세히 보기]</div>  
          <input type="checkbox" className={style.checkbox} onClick={()=>{setPrivacyCheck(!privacyCheck);}}/>
          <label className={style.text}>[필수] 개인정보 수집 및 이용 동의</label>
          <div className={style.info} onClick={privacyModalHandler}>[자세히 보기]</div>
        </div>
        {/* 버튼 박스 */}
        <div className={style.buttonbox}>
          <div className={style.button} onClick={handleSignup}>가 입 하 기</div>
          <div className={style.button} onClick={()=>{
            dispatch(showLoginModal(true))
            dispatch(showSignupModal(false))
          }}>취 소</div>
        </div>
      </div>
    </div>
  )
}
export default SignupModal;