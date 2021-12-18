import style from './SignupModal.module.css';

function LoginModal(){
  return (
    <div className={style.container}>
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
          <input type='text' className={style.input} />
          <div className={style.subtitle}>비 밀 번 호 확 인</div>
          <input type='text' className={style.input} />
          <div className={style.subtitle}>닉 네 임</div>
          <input type='text' className={style.input} />
        </div>

        {/* 텍스트 박스 */}
        <div className={style.textbox}>
          <input type="checkbox" className={style.checkbox}/>
          <div className={style.text}>[필수] 6699 이용약관 동의</div>
          <input type="checkbox" className={style.checkbox}/>
          <div className={style.text}>[필수] 개인정보 수집 및 이용 동의</div>
          <input type="checkbox" className={style.checkbox}/>
          <div className={style.text}>전체 동의</div>
        </div>

        {/* 버튼 박스 */}
        <div className={style.buttonbox}>
          <div className={style.button}>로 그 인</div>
          <div className={style.button}>취 소</div>
        </div>
      </div>
    </div>
  )
}
export default LoginModal;