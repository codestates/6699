import {Routes, Route, Link} from 'react-router-dom';
import style from '../pages/MyEditPage.module.css'
import React, { useState, useEffect } from 'react';

function MyEditPage (){

    /*유효성 검사 상태*/
  const [nameErr, setNameErr] = useState(false);
  const [inputPassWord, setInputPassword] = useState('')
  const [passwordErr, setPasswordErr] = useState(false);
  const [inputConfirmPassWord, setInputConfirmPassWord] = useState('')
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);


  useEffect(() => {
          let passwordExp = /^[a-zA-z0-9]{6,12}$/;

          console.log("passwordErr:", passwordErr)
          
          if(inputPassWord === '') {
              setPasswordErr(false)
            } else if(!passwordExp.test(inputPassWord)) {
                setPasswordErr(true);
                return 
            } else {
                setPasswordErr(false);
                return
            }
    }, [inputPassWord, passwordErr])

    // 닉네임 중복 확인
    const checkNickname = () => {

    }

    // 비밀번호 유효성 검사
  const passwordValidCheck = (e) => {

    setInputPassword(e.target.value)

  };
    

   /*비밀번호 에러 핸들러*/
   const passwordConfirmCheck = (e) => {

    console.log("confirmedPassword;", e.target.value)

    setInputConfirmPassWord(e.target.value)
    console.log(inputConfirmPassWord)

    if(inputPassWord === inputConfirmPassWord) setConfirmPasswordErr(false)
    else setConfirmPasswordErr(true)
  };

    return (
        <div id={style.container}>

        <div id={style.user_container}>
        <div id={style.user_profile_wrapper}>
        
        <div id={style.user_mini_wrapper}>
            <div id={style.profile_image}>
            <div id={style.profile_image_camera}></div>
        </div>
        
        <div id={style.user_name}>꼬기</div>
    
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
            <b> <p id={style.title}>계 정 설 정</p> </b>
            <p id={style.explain}>회원정보를 수정합니다.</p> 
            </div>

            <div id={style.setting_inner_wrap}>
                <div id={style.seeting_sub_wrap}>
                <p className={style.text}>이메일</p>
                <div id={style.space_area}></div>
                <input className={style.textarea}/>
                <div id={style.error_message_area}></div>
                </div>
                <div id={style.seeting_sub_wrap}>
                <p className={style.text}>닉네임 변경</p>
                <div id={style.space_area}></div>
                <input className={style.textarea} placeholder = '꼬부기'/>
                <p id={style.hidden}> 중복된 닉네임입니다. </p>
                </div>
                <div id={style.seeting_sub_wrap}>
                <p className={style.text}>비밀번호 수정</p>
                <div id={style.space_area}></div>
                <input 
                    type='password' 
                    className={style.textarea}
                    value={inputPassWord}
                    onChange={passwordValidCheck} 
                />
                <p id={passwordErr ? style.err : style.hidden}> 비밀번호는 영문 대소문자와 숫자 6~12자리로 입력해야합니다. </p>
                </div>
                <div id={style.seeting_sub_wrap}>
                <p className={style.text}>비밀번호 수정 확인</p>
                <div id={style.space_area}></div>
                <input
                    type='password' 
                    className={style.textarea}
                    value={inputConfirmPassWord}
                    onChange={passwordConfirmCheck} 
                />
                <p id={confirmPasswordErr ? style.err : style.hidden}> 비밀번호가 일치하지 않습니다. </p>
                </div>
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