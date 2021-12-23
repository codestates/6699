import style from './SayingModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { showSayingModal,showSayingCategoryModal } from '../../store/ModalSlice';
import { setSayingTitles, setSayingIds, setFocusedSayingId, setFocusedTitle, setIndex, setCategory } from '../../store/MainSlice';
import { REACT_APP_API_URL } from '../../config';
import axios from 'axios';
import { logout, getUserInfo } from '../../store/AuthSlice';


function SayingModal(){
  const nowCategory = useSelector(state => state.main.nowCategory);
  const getCategory = (category) => dispatch(setCategory(category))
  const dispatch = useDispatch();
  const { isRendered, focusedTitle, focusedSayingId, sayingTitles, sayingIds, index } = useSelector(state => state.main);
  const { isLogin, userInfo } = useSelector((state) => state.auth);
  
  /* 현재 포커싱된 명언 갱신 함수 */
  const getFocusedTitle = (title) =>{ dispatch(setFocusedTitle(title))};
  /* 현재 카테고리의 명언제목들 수집 함수 */  
  const getTitles = (titles) => {dispatch(setSayingTitles(titles))};
  /* sayingId 수집 함수 */
  const getSayingId = (sayingIds) => {dispatch(setSayingIds(sayingIds))};
  /* 포커싱된 sayingId 갱신 함수 */
  const getFocusedSayingId = (sayingIds) =>{dispatch(setFocusedSayingId(sayingIds))};
  /* 인덱스 저장 함수 */
  const getIndex = (idx) =>{dispatch(setIndex(idx))};

  // 내용에 대한 state
  const [inputContent, setInputContent] = useState('')

  // 내용 입력 handler
  const handleContent = (e) => {
    setInputContent(e.target.value)
  }

  const handlePostBtn = async (e) => {
    await axios.post(`${REACT_APP_API_URL}/?category=${nowCategory}`, 
      { content: inputContent,
        user_id: userInfo.id
      },
      { withCredentials: true }
    );

    alert(`𝟲𝟲𝟵𝟵\n${userInfo.username}님의 명언이 작성됐습니다! 😖`);
    getRecentSaying();
    // 게시글 작성 모달 닫기
    dispatch(showSayingModal(false))
  }
  
  /* 기존 카테고리별 좋아요 랭킹 불러옴 */
  const getLikeRanking = async (nowCategory) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/ranking/like/?category=${nowCategory}`,
      {withCredentials: true});
      if (response.data.data.allSaying) {
        getSayingId(response.data.data.allSaying.map((el)=>{return el.id})) ;
        getTitles(response.data.data.allSaying.map((el)=>{return el.content}));
      }
      else {
        getTitles(response.data.data.filteredSaying.map((el)=>{return el.content}));
        getSayingId(response.data.data.filteredSaying.map((el)=>{return el.id}));
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* 방금 생성한 명언을 명언 배열에 넣고 새로운 명언을 포커싱 */
  const getRecentSaying = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/user/mysaying`,
      {withCredentials: true});
      if (response.data.data.filteredSaying) {
        const newSayingId = response.data.data.filteredSaying[response.data.data.filteredSaying.length-1].id;
        const newTitle = response.data.data.filteredSaying[response.data.data.filteredSaying.length-1].content;
        getLikeRanking(nowCategory);
        const sayingIdsCopy = sayingIds.slice();
        sayingIdsCopy.push(newSayingId)
        const sayingTitlesCopy = sayingTitles.slice();
        sayingTitlesCopy.push(newTitle) 

        dispatch(setSayingIds(sayingIdsCopy));
        dispatch(setSayingTitles(sayingTitlesCopy))
        getFocusedSayingId(newSayingId);
        getFocusedTitle(newTitle);

      }
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className={style.container}>
    <div className={style.modalbox_bg} onClick={() => dispatch(showSayingModal(false))}/>
      <div className={style.modalbox}>
        <div className={style.image}/>

        <div className={style.contentbox}>
        <div className={style.titlebox}>
          <div className={style.name}>꼬부기</div>
          {/* 선택된 카테고리  */}
          <div className={style.category} onClick={() => dispatch(showSayingCategoryModal(true))}>{nowCategory}</div>
          <div className={style.category_toggle} onClick={() => dispatch(showSayingCategoryModal(true))}/>
        </div>
          {/* 내용 입력 */}
        <input type='text' className={style.writebox}
         value={inputContent}
         onChange={handleContent} />
        <div className={style.anotherbox}>
         {/* 작성하기 버튼 */}
          <div className={style.writebutton} onClick={handlePostBtn}>작성하기</div>
          <div className={style.link} onClick={() => dispatch(showSayingModal(false))}><div className={style.cancelbutton}>취소</div></div>
        </div>
      </div>
      </div>
    </div>

  )
}
export default SayingModal;