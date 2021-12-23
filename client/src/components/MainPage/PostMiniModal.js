/*****done*****/
import style from './PostMiniModal.module.css'
import { showPostModal, showSayingModal} from '../../store/ModalSlice';
import { setCategory } from '../../store/MainSlice';
import React, {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux'


function PostMiniModal({modalOff}){
  const dispatch = useDispatch();
  const nowCategory = useSelector(state => state.main.nowCategory);
  const showSayingModalSet = (show) => {dispatch(showSayingModal(show))
                                        dispatch(setCategory('건강'))}
  return(
    <div className={style.box_bg} onClick = {modalOff}>
      <div className={style.box}>
        <div className={style.post}onClick={() => dispatch(showPostModal(true))}>
          글 작성
        </div>
        <div className={style.say}onClick={() => showSayingModalSet(true)}>
          명언 작성
        </div>
      </div>
    </div>
      
  )
}
export default PostMiniModal;