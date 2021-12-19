import style from './LoginModal.module.css';

function SignupModal(){
  return (
    <div className={style.container}>
      <div className={style.modalbox}>
        {/* 로고 박스 */}
        <div className={style.logobox}>
          <div id ={style.logo} />
          <div className={style.logotitle}>로그인</div>
        </div>

        {/* 인풋 박스 */}
        <div className={style.inputbox}>
          <div className={style.subtitle}>이 메 일</div>
          <input type='text' className={style.input} />
          <div className={style.subtitle}>비 밀 번 호</div>
          <input type='text' className={style.input} />
        </div>

        {/* 버튼 박스 */}
        <div className={style.buttonbox}>
          <div className={style.loginbutton}>로 그 인</div>
        </div>
        
        {/* 텍스트 박스 */}
        <div className={style.textbox}>
          <div className={style.text}>회 원 가 입</div>
        </div>
      </div>
    </div>
  )
}
export default SignupModal;