import style from './SignupModal.module.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showLoginModal, showSignupModal } from '../../store/modal-slice';
import ServiceModal from './ServiceModal';
import PrivacyModal from './PrivacyModal';

function SignupModal(){
  const dispatch = useDispatch();
  const [serviceOpen, setService] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const serviceModalHandler = () => {
    setService(!serviceOpen);
  };
  const privacyModalHandler = () => {
    setPrivacyOpen(!privacyOpen);
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
          <input type='text' className={style.input} />
          <div className={style.subtitle}>비 밀 번 호</div>
          <input type='password' className={style.input} />
          <div className={style.subtitle}>비 밀 번 호 확 인</div>
          <input type='password' className={style.input} />
          <div className={style.subtitle}>닉 네 임</div>
          <input type='text' className={style.input} />
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