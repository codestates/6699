import style from './SayingLike.module.css';
import emptyHeart from '../../images/Empty_Red_Heart.png';
import redHeart from '../../images/Red_Heart.png';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLikes } from '../../store/MainSlice';
import axios from 'axios';
import { REACT_APP_API_URL } from '../../config';

function SayingLike(){
  const dispatch = useDispatch();
  const { focusedSayingId } = useSelector(state =>state.main);
  const { isLogin, userInfo } = useSelector(state =>state.auth);
  const [ totalLike, setTotalLike ] = useState();
  const [ isLiked, setIsLiked ] = useState();
  const [isSelect, setIsSelect] = useState(false);

  const getSayingLike = async () => {
    try {
      const getRes = await axios.get(`${REACT_APP_API_URL}/${focusedSayingId}/like`,
      {withCredentials: true});
      
      console.log(getRes.data.data);
      if(getRes.data.data){
        setTotalLike(getRes.data.data.sayingInfo.total_like);
        isLogin && setIsLiked(getRes.data.data.state);
      }

      // if(isSelect){
      //   const postRes = await axios.post(`${REACT_APP_API_URL}/${focusedSayingId}/like`,
      //   {},
      //   {withCredentials: true});

      //   if(postRes.data.data.sayingInfo){
      //     console.log('좋아요')
      //     setIsSelect(true);
      //     setTotalLike(postRes.data.data.sayingInfo.total_like);
      //   }
      // } else {
      //   const postRes = await axios.delete(`${REACT_APP_API_URL}/${focusedSayingId}/like`,
      //   {withCredentials: true});

      //   if(postRes.data.data.sayingInfo){
      //     console.log('좋아요 취소')
      //     setIsSelect(false);
      //     setTotalLike(postRes.data.data.sayingInfo.total_like);
      //   }
      // }
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    getSayingLike();
  },[focusedSayingId]);

  return (
    <div className={style.container}>
        <img alt='heart' src={isLiked ? redHeart : emptyHeart} className={style.heart_icon} onClick={()=>{setIsSelect(true)}}/>
        <div className={style.heart_text}>{totalLike}</div>
    </div>
  )
}
export default SayingLike;