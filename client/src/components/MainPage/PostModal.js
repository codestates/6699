import axios from 'axios';
import style from './PostModal.module.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { logout, getUserInfo } from '../../store/AuthSlice';
import { useSelector, useDispatch } from 'react-redux';
import { showPostModal } from '../../store/ModalSlice';
import { setSayingIdforCreatedArticle, setCreatedArticleId, getCreatedArticleInfo, getSayingInfoCreatedArticle } from '../../store/MainSlice';
// /home/kimgippeum/6699/client/src/store/MainSlice.js
import { REACT_APP_API_URL } from '../../config';

function PostModal({ selectedCategory }){

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin, userInfo } = useSelector((state) => state.auth);
  const { focusedSayingId, sayingInfoCreatedArticle } = useSelector(state => state.main);
  
  // 작성하고 있는 게시물의 명언Id를 저장
  useEffect(async () => {
    dispatch(setSayingIdforCreatedArticle(focusedSayingId));

    // 현재 선택된 명언Id를 통해, 명언 정보를 불러온다
    const sayingInfo = await axios.get(`${REACT_APP_API_URL}/${focusedSayingId}`)

    // 현재 선택된 명언Id를 기반으로, 게시글 페이지에서 사용할 수 있게 명언 정보를 저장한다
    dispatch(getSayingInfoCreatedArticle({
      id: sayingInfo.data.data.filteredSaying.id,
      content: sayingInfo.data.data.filteredSaying.content,
      category: sayingInfo.data.data.filteredSaying.category,
      total_like: sayingInfo.data.data.filteredSaying.total_like,
      createdAt: sayingInfo.data.data.filteredSaying.createdAt,
      updatedAt: sayingInfo.data.data.filteredSaying.updatedAt
    }));

  }, [])


  // default 이미지 정보
  const defaultImg = 'dongsuck.png';

  /******** 이미지 업로드 테스트 ************/
  const [uploadImg, setUploadImg] = useState('')
  const [imgFile, setImgFile] = useState('')

  const [postImg, setPostImg] = useState(defaultImg)
  const [imgChange, SetImgChange] = useState(true)

  // 제목에 대한 state
  const [inputTitle, setInputTitle] = useState('')
  // 내용에 대한 state
  const [inputContent, setInputContent] = useState('')

  // post 이미지를 선택했을때, useEffect 실행!
  useEffect(async () => {
    if(uploadImg) {
      const formData = new FormData();
          formData.append('img', uploadImg, uploadImg.name);
          const response = await axios.post(`${REACT_APP_API_URL}/upload`, formData, {
            headers: {
              'Content-Type' : 'multipart/form-data'
            }
          })
          setPostImg(response.data.result.key)
          SetImgChange(false)
    } 
  }, [uploadImg])

  // 사진 버튼 누르고 
  const onChange = (e) => {
    setUploadImg(e.target.files[0]);

    if(e.target.files[0]) {
      setImgFile(e.target.files[0])
    }
  }

  // 제목 입력 handler
  const handleTitle = (e) => {
    setInputTitle(e.target.value)
  }

  // 내용 입력 handler
  const handleContent = (e) => {
    setInputContent(e.target.value)
  }

  // 작성하기 버튼을 클릭하면, 
  // 현재 preview 이미지가 게시글의 image가 된다 (articles 테이블에 image 저장)
  // 현재 제목(title)이 게시글의 제목이 된다 (articles 테이블에 title 필드에 저장)
  // 현재 내용(content)이 게시글의 내용이 된다 (articles 테이블에 content 필드에 저장)
  const handlePostBtn = async (e) => {
    // 작성한 게시글 저장, 서버에 POST 요청
    // 서버에 요청할때 제목(title), 게시글 이미지(image), 명언Id(saying_id)를 함께 담아서 전달한다 
    const response = await axios.post(`${REACT_APP_API_URL}/${focusedSayingId}/article`, 
      { title: inputTitle,
        content: inputContent,
        image: postImg,
        saying_id: focusedSayingId
      },
      { withCredentials: true }
    );

    // 게시글 페이지에서 사용할 수 있도록, 생성한 게시글 정보를 담는다
    dispatch(getCreatedArticleInfo(response.data.data.articleInfo))

    alert(`𝟲𝟲𝟵𝟵\n${userInfo.username}님의 게시글이 작성됐습니다! 😖`);

    // 게시글 작성 모달 닫기
    dispatch(showPostModal(false))
    // 해당 게시글 페이지로 이동한다
    navigate('/postingpage');
  }

  return (
    
    <div className={style.container}>
      <Link 
        className={style.link} to='/mainpage' 
        onClick={() => dispatch(showPostModal(false))}>
        <div className={style.modalbox_bg}/></Link>

      <div className={style.modalbox}>
        {/* 이미지 입력 */}
        {/* preview 이미지: 이미지를 클릭하기전에는 default 카메라 이미지 / 이미지를 선택한 후는 해당 이미지를 띄운다 */}
        { imgChange
           ?
           <img
           id={style.post_image}
           alt='sample'
           src={`${REACT_APP_API_URL}/uploads/${defaultImg}`}/>
           :
           <img
           id={style.post_image}
           alt='sample'
           src={`${REACT_APP_API_URL}/upload/${postImg}`}/>
        }

        {/* 파일 선택 버튼 */}
        <input name='img'
             type='file'
             id='imgFile'
             name='imgFile'
             className={style.imgfind}
             onChange={onChange} />

        <div className={style.contentbox}>
          {/* 제목 입력 */}
        <div className={style.titlebox}>
          {/* 선택된 카테고리  */}
          {/* <div className={style.category} > {selectedCategory} </div> */}
          <div className={style.category} > {sayingInfoCreatedArticle.category} </div>
          
          <input 
            type='text' 
            className={style.title} 
            placeholder={'제목을 작성해주세요.'}
            value={inputTitle}
            
            onChange={handleTitle} />
        </div>

        {/* 내용 입력 */}
        <textarea 
          className={style.writebox}
          value={inputContent}
          onChange={handleContent} />

        <div className={style.anotherbox}>
          {/* 작성하기 버튼 */}
          <div 
            className={style.writebutton}
            onClick={handlePostBtn}>
              작성하기
          </div>
          <Link className={style.link} onClick={() => dispatch(showPostModal(false))} to='/mainpage'>
            {/* 취소 버튼 */}
            <div className={style.cancelbutton}>취소</div></Link>
        </div>
      </div>
      </div>
    </div>
  )
}
export default PostModal;