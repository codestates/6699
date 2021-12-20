/*****done*****/
import style from './PostMiniModal.module.css'
import { showPostModal, showSayingModal} from '../../store/ModalSlice';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux'

function PostMiniModal({modalOff}){
  const dispatch = useDispatch();
  return(
    <div className={style.box_bg} onClick = {modalOff}>
      <div className={style.box}>
        <div className={style.post}onClick={() => dispatch(showPostModal(true))}>
          글 작성
        </div>
        <div className={style.say}onClick={() => dispatch(showSayingModal(true))}>
          명언 작성
        </div>
      </div>
    </div>
      
  )
}
export default PostMiniModal;