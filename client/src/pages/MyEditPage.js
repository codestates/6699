import axios from 'axios';
import style from '../pages/MyEditPage.module.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { REACT_APP_API_URL } from '../config';
import { useSelector, useDispatch } from 'react-redux';
import DropaccountModal from '../components/MyPage/DropaccountModal.js';
import { login, logout, getUserInfo } from '../store/AuthSlice'

function MyEditPage (){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLogin, userInfo } = useSelector((state) => state.auth);
    // auth를 통해서 받아온 유저정보
    const { id, email, username, image, introduction } = userInfo
    
    const [ DropaccountModalState, SetDropaccountModalState ] = useState(false)
        
    /*유효성 검사 상태*/
    // 닉네임 변경 input
    const [inputNickname, setInputNickname] = useState(`${username}`)
    // 비밀번호 수정 input
    const [inputPassWord, setInputPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState(false);
    
    const [completePasswordCheck, setCompletePasswordCheck] = useState(false);
    // 비밀번호 수정 확인 input
    const [inputConfirmPassWord, setInputConfirmPassWord] = useState('');
    const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);
    
    const [confirmPasswordCheck, setConfirmPassWordCheck] = useState(false);
    // 프로필 자기소개 state
    const [inputIntro, setInputIntro] = useState(introduction);

    // 로그아웃 handler
    const handleLogout = async () => {
        try {
          await axios.post(
            `${REACT_APP_API_URL}/user/logout`,
            {},
            { withCredentials: true }
          );
          dispatch(logout());
          navigate('/');
        } catch (err) {
          console.log(err);
        }
      }

    // 고양이 삭제 모달 handler
    const handleDropaccountModal = () => {
        SetDropaccountModalState(!DropaccountModalState)
    }
    
    // 프로필 변경 handler
    const handleProfileEdit = async () => {
        if(completePasswordCheck && confirmPasswordCheck) {
            try {
                // response 변수에 서버 응답결과를 담는다
                const response = await axios.patch(
                    `${REACT_APP_API_URL}/user/me`,
                    { 
                        email: `${email}`,
                        password: `${inputPassWord}`,
                        username: `${inputNickname}`,
                        image: `${image}`,
                        introduction: `${inputIntro}`
                    },
                    { withCredentials: true }
                    )
                    
                    // 서버의 응답결과에 data가 들어있다면 프로필 변경 성공
                    if(response.data) {
                        alert('𝟲𝟲𝟵𝟵\n프로필 변경이 완료했습니다! 😖')
                        // 프로필 변경이 완료된 후, 마이페이지로 이동
                        navigate('/mypage');
                    } 
                } catch(err) {
                    if(err.response.status === 409) alert('𝟲𝟲𝟵𝟵\n이미 사용중인 닉네임입니다! 😖');
                    console.log(err)
                }
            } 
            
            // 닉네임 / 자기소개 / 비밀번호 
            else {
                // 닉네임 입력창이 비어있으면, 다음을 응답한다
                if(inputNickname === '') {
                    alert('𝟲𝟲𝟵𝟵\n닉네임 변경란을 입력해주세요! 😖');
                    return
                }
                
                // 닉네임이 중복하면...
                
                // 비밀번호 입력창이 비어있으면, 다음을 응답한다
                
                if(inputPassWord === '' || passwordErr) {
                    alert('𝟲𝟲𝟵𝟵\n비밀번호 변경런을 확인해주세요! 😖');
                    return
                } 
                
                if(inputConfirmPassWord === '' || confirmPasswordErr) {
                    alert('𝟲𝟲𝟵𝟵\n비밀번호 수정 변경란을 확인해주세요! 😖')
                    return
                }
                else {
                    alert('𝟲𝟲𝟵𝟵\n빈칸을 모두 입력해주세요! 😖');
                    return
                }
            }
        }
        
        // 비밀번호 및 비밀번호 확인 창이 바뀔때마다 발생한다
        useEffect(() => {
            // 비밀번호 유효성 검사 정규식
            let passwordExp = /^[a-zA-z0-9]{6,12}$/;
            // 비밀번호를 입력하지 않았으면, 아무런 notice가 없어야한다.
            // 그때 입력창은 회색이다
            if(inputPassWord === '') {
                setPasswordErr(false)
                setCompletePasswordCheck(false)
            } 
            // 입력한 비밀번호가 비밀번호 유효성 검사 (정규식)을 만족하면, "사용가능한 비밀번호입니다." 문구를 띄운다
            // 그때 입력창은 하늘색이다.
            else if(passwordExp.test(inputPassWord)) {
                setCompletePasswordCheck(true)
                setPasswordErr(false)
            } 
            // 비밀번호가 비밀번호 유효성 검사를 만족하지 못하면, "비밀번호는 영문 대소문자와 숫자 6-12자리로 입력해야합니다" 문구를 띄운다
            // 그때 입력창은 회색이다
            else {
                setCompletePasswordCheck(false)
                setPasswordErr(true)
            }
            // 비밀번호 확인창
            // 새로운 비밀번호와 새로운 비밀번호 확인 같고 새로운 비밀번호가 null이 아니며 유효성 검사를 통과했다면
            // 비밀번호 수정 확인, 입력창은 하늘색으로 바뀌며 "비밀번호가 일치합니다" 문구를 띄운다
            if(inputPassWord === inputConfirmPassWord && inputPassWord !== '' && completePasswordCheck === true) {
                setConfirmPasswordErr(false)
                setConfirmPassWordCheck(true)
            }
            // 만약 비밀번호 수정 확인창에 아무값도(null) 들어가지 않았다면, 입력창은 회색이며 아무런 notice도 띄우지 않는다
            else if (inputConfirmPassWord === '') {
                setConfirmPasswordErr(false)
            }
            // 만약 위 조건 하나라도 만족하지 않는다면, 비밀번호 수정 확인 입력창은 회색이며
            // "비밀번호가 일치하지 않습니다" 문구를 띄운다
            else {
                setConfirmPasswordErr(true)
                setConfirmPassWordCheck(false)
            }
        }, [inputNickname, inputPassWord, inputConfirmPassWord]);
        
        // 닉네임 중복 확인
        const checkNickname = (e) => {
            setInputNickname(e.target.value)
            console.log("inputIntro :", inputIntro )
        };
        // 비밀번호 유효성 검사
        const passwordValidCheck = (e) => {
            setInputPassword(e.target.value)
        };
        // 비밀번호 에러 핸들러
        const passwordConfirmCheck = (e) => {
            setInputConfirmPassWord(e.target.value)
        };
        // 자기소개 변경 핸들러
        const handleIntro = (e) => {
            setInputIntro(e.target.value)
        }

        // // 이미지 가져오기 TEST

        // const [files, setFiles] = useState('');

        // const onLoadFile = async (e) => {
        //   const file = e.target.files;
        //   console.log(file);
        //   setFiles(file);
        // }

        // const imgUpload = (e) => {

        // }
  
  return (
    <div id={style.container}>
      {DropaccountModalState ? <DropaccountModal handleDropaccountModal={handleDropaccountModal}/> : null}
        <div id={style.user_container}>
          <div id={style.user_profile_wrapper}>
            <div id={style.user_mini_wrapper}>
              {/* 프로필 이미지 및 카메라 사진*/}
                <div id={style.profile_image}>
                  <div id={style.profile_image_camera}></div>
                  {/* <input type='file' id='imgae' accept='img/*' onChange={onLoadFile}/> */}
                </div>
            
              {/* 프로필 닉네임 */}
                <div id={style.user_name}> {username} </div>
            </div>
          </div>

        <div id={style.message_wrapper}>
            {/* 프로필 자기소개 (introduction) */}
              <div id={style.message}>
                  <input 
                  id={inputIntro === null ? style.introduction_null : style.introduction }
                  value={inputIntro}
                  onChange={handleIntro} 
                  />
              </div>
        </div>
        
        {/* 프로필 설정 및 로그아웃 버튼 */}
           <div className = {style.buttons_1}>
              <button id={style.profile_setting}>프로필 설정</button>
                <button 
                  id= {style.logout}
                  onClick={handleLogout}
                >
                    로그아웃
                </button>
           </div>
         </div>
         
         {/* 프로필 계정 설정 */}
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
                           
                           {/* 이메일 입력창, 주의! value 값 로그인 계정 이메일로 고정*/}
                             <input 
                               className={style.textarea_confirm} 
                               value='admin'
                             />
                             <div id={style.error_message_area}></div>
                               </div>
                               <div id={style.seeting_sub_wrap}>
                                   <p className={style.text}>닉네임 변경</p>
                                   <div id={style.space_area}></div>
                                   
                                   {/* 닉네임 변경창, 주의! value 값 로그인 계정 닉네임으로 변경(변수)해야함*/}
                                     <input 
                                       className={style.textarea_confirm} 
                                       value={inputNickname}
                                       onChange={checkNickname} 
                                     />
                                     
                                     <p id={style.hidden}> 중복된 닉네임입니다. </p>
                                     </div>
                                     <div id={style.seeting_sub_wrap}>
                                         <p className={style.text}>비밀번호 변경</p>
                                         <div id={style.space_area}></div>
                                         
                                         {/* 비밀번호 수정 입력창 (1) */}
                                         <input 
                                           type='password' 
                                           className={ completePasswordCheck
                                           ? style.textarea_confirm
                                           : style.textarea 
                                           }
                                           value={inputPassWord}
                                           onChange={passwordValidCheck} 
                                          />
                                          
                                          { completePasswordCheck
                                          ? <p id={style.match}>사용가능한 비밀번호 입니다.</p> 
                                          : <p id={passwordErr ? style.err : style.hidden}> 
                                          비밀번호는 영문 대소문자와 숫자 6~12자리로 입력해야합니다. 
                                            </p>
                                          } 
                                      </div>
                                          
                                          <div id={style.seeting_sub_wrap}>
                                              <p className={style.text}>비밀번호 변경 확인</p>
                                              <div id={style.space_area}></div>
                                                                      
                                              {/* 비밀번호 수정 확인 입력창 (2) */}
                                              <input
                                                type='password' 
                                                className={ confirmPasswordCheck  
                                                ? style.textarea_confirm
                                                : style.textarea
                                                }
                                                value={inputConfirmPassWord}
                                                onChange={passwordConfirmCheck} 
                                               />
                                                { confirmPasswordCheck 
                                                ? <p id={style.match}>비밀번호가 일치합니다.</p> 
                                                : <p id={confirmPasswordErr ? style.err : style.hidden}> 
                                                비밀번호가 일치하지 않습니다. </p>
                                                }
                                           </div>

                                {/* 프로필 변경 및 변경 취소 버튼 */}
                                    <div className={style.buttons_2}>
                                    {/* 프로필 변경 버튼 */}
                                      <button 
                                        id={style.btn1}
                                        onClick={handleProfileEdit}
                                      >
                                        프로필 변경
                                      </button>

                                    {/* 변경 취소 버튼 */}
                                    <Link to ='/mypage'><button id={style.btn2}>변경 취소</button></Link>
                                 </div>
                                </div>

                                     {/* 회원 탈퇴 버튼 */}
                                    <button 
                                      id={style.resign_btn}
                                      onClick={() => {handleDropaccountModal()}}
                                     >
                                     회원 탈퇴
                                    </button>
                            </div>
                     </div> 
             </div>
        );
    };
export default MyEditPage