import style from './ProfileImageModal.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { logout, getUserInfo } from '../../store/AuthSlice'
import { useSelector, useDispatch } from 'react-redux';
import { REACT_APP_API_URL } from '../../config';

function ProfileImageModal({ handleProfileImage }){

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin, userInfo } = useSelector((state) => state.auth);

  console.log("프로필 이미지 모달 userInfo 확인:", userInfo)
  console.log("프로필 이미지 모달 userInfo.username 확인:", userInfo.username)
  console.log("프로필 이미지 모달 userInfo.image 확인:", userInfo.image)

  

  /******** 이미지 업로드 테스트 ************/
  const [content, setContent] = useState('')
  const [imgFile, setImgFile] = useState('')

  const [preview, setPreview] = useState('')
  const [previewCamera, SetPreviewCamera] = useState(true)

  // 프로필 이미지를 선택했을때, useEffect 실행!
  useEffect(async () => {
    if(content) {
      const formData = new FormData();
          formData.append('img', content, content.name);
          const response = await axios.post(`${REACT_APP_API_URL}/upload`, formData, {
            headers: {
              'Content-Type' : 'multipart/form-data'
            }
          })
          setPreview(response.data.data.img)
          SetPreviewCamera(false)
    } 
  }, [content])

  // 
  const onChange = (e) => {
    setContent(e.target.files[0]);

    if(e.target.files[0]) {
      setImgFile(e.target.files[0])
      console.log("imgFile 확인", e.target.files[0], imgFile)
    }
  }

  // 저장하기 버튼을 클릭하면, 현재 preview 이미지가 user의 image가 된다 (DB에 해당 이미지 url 저장)
  const handleImageSave = async (e) => {
    // axios로 현재 preview 사진을 DB에 저장한다
    await axios.post(`${REACT_APP_API_URL}/user/picture`, 
    { image: preview },
    { withCredentials: true }
    );
    
    alert('𝟲𝟲𝟵𝟵\n프로필 사진이 변경됐습니다! 😖');
    // 변경된 프로필 이미지 상태를 업데이트한다
    dispatch(getUserInfo({
      username: userInfo.username,
      image: preview,
    }))
    // preview 이미지 카메라로 바꾸기
    SetPreviewCamera(true)
    // 프로필 변경 모달을 닫는다
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
      {/* <input name='img'
             type='file'
             id='input-file'
             className={style.imgfind}
             onChange={onChange} /> */}

          {/* 파일 선택 버튼  */}
          <input name='img'
             type='file'
             id='imgFile'
             name='imgFile'
             className={style.imgfind}
             onChange={onChange} />

        {/* preview 이미지: 이미지를 클릭하기전에는 default 카메라 이미지 / 이미지를 선택한 후는 해당 이미지를 띄운다 */}
        {previewCamera 
          ?
            <img
            id={style.preview_camera}
            alt='sample'
            src={`${REACT_APP_API_URL}/uploads/iOS14.jpeg`}/>
          :
          <img
          id={style.preview_image}
          alt='sample'
          src={`${REACT_APP_API_URL}/${preview}`}/>
        }

        {/* --------- 여기부터, 저장하기 취소 버튼 --------- */}
        <div className={style.anotherbox}>

        {/* 저장하기 버튼 */}
        <div 
          className={style.cancelbutton}
          onClick={handleImageSave}>
          저장하기
        </div>
          
        {/* 취소 버튼 */}
        <div 
          className={style.deletebutton}
          onClick={() => handleProfileImage()}>
          취소
        </div>
    
        </div>
      </div>
    </div>
  )
}
export default ProfileImageModal;