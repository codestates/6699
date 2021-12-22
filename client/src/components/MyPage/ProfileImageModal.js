import style from './ProfileImageModal.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { logout, getUserInfo } from '../../store/AuthSlice'
import { useSelector, useDispatch } from 'react-redux';
import { REACT_APP_API_URL } from '../../config'

function ProfileImageModal( { handleProfileImage }){

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /******** 이미지 업로드 테스트 ************/
  const [content, setContent] = useState('')

  // 이미지 파일 선택
  const onChange = (e) => {
    console.log(e.target.files)
    setContent(e.target.files[0]);
  }

  // 이미지 업로드
  const handleImageSave = async (e) => {

    console.log("저장하기 버튼 확인!")

    e.preventDefault();
          const formData = new FormData();
          formData.append('img', content, content.name);

          const response = await axios.post(`${REACT_APP_API_URL}/upload`, formData, {
            headers: {
              'Content-Type' : 'multipart/form-data'
            }
          })
          
          const image = response.data.data.img

          if(response.data) {
            await axios.post(`${REACT_APP_API_URL}user/picture`, 
            { image: image },
            { withCredentials: true }
            );
          }

          alert('𝟲𝟲𝟵𝟵\n프로필 사진이 변경됐습니다! 😖');
          handleProfileImage()
          return
  }

  

  return (
    <div className={style.container}
    // onClick={() =>  handleProfileImage()} // asd
    >
      <div className={style.modalbox}>

      <div className={style.logobox}>
        {/* 6699 로고 */}
        <Link to='/mainpage'><div id ={style.logoimage} onClick={() => handleProfileImage()}/></Link> 
        </div>
      <div className={style.catimagebox}>
        {/* 사진 이미지 */}
        <div id={style.catimage}/>
      </div>


{/* <label for='input-file' id={style.label}> 업로드 </label> */}
{/* 파일 선택 버튼 */}
      <input name='img'
             type='file'
             id='input-file'
             className={style.imgfind}
             onChange={onChange} />

             

        {/* <div className={style.contentbox}>
            "1일 1식" 명언관 연관된     <br/>
            23개의 게시물이 사라져요.    <br/>
            정말 <b>삭제</b>하시겠어요...?     <br/>
        </div> */}

        <div className={style.anotherbox}>
          {/* 삭제하기 버튼 */}
          <div 
          className={style.deletebutton}
          // onClick={() => handleDeleteBtn()}
          >
            취소
          </div>
          
          {/* 유지하기 버튼 */}
          
            <div 
            className={style.cancelbutton}
            onClick={handleImageSave} 
            >
              저장하기
            </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileImageModal;