import style from './SayingLike.module.css';
import emptyHeart from '../../images/Empty_Red_Heart.png';
import redHeart from '../../images/Red_Heart.png';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { REACT_APP_API_URL } from '../../config';

function SayingLike(){
  const { focusedSayingId } = useSelector(state =>state.main);
  const { isLogin } = useSelector(state =>state.auth);
  const [ totalLike, setTotalLike ] = useState();
  const [ isLiked, setIsLiked ] = useState();
  const [ isSelect, setIsSelect ] = useState(false);

  const getSayingLike = async () => {
    try {
      if(isLogin){
        const getRes = await axios.get(`${REACT_APP_API_URL}/${focusedSayingId}/like`,
        {withCredentials: true});
        
        if(getRes.data.data){
          setTotalLike(getRes.data.data.sayingInfo.total_like);
          isLogin && setIsLiked(getRes.data.data.state);
        }

        if(!isLiked && isSelect){
          const postRes = await axios.post(`${REACT_APP_API_URL}/${focusedSayingId}/like`,
          {},
          {withCredentials: true});

          if(postRes.data.data.sayingInfo){
            setTotalLike(postRes.data.data.sayingInfo.total_like);
            setIsSelect(false);
          }
        } else if(isLiked && isSelect){
          const postRes = await axios.delete(`${REACT_APP_API_URL}/${focusedSayingId}/like`,
          {withCredentials: true});

          if(postRes.data.data.sayingInfo){
            setTotalLike(postRes.data.data.sayingInfo.total_like);
            setIsSelect(false);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    getSayingLike();
  },[focusedSayingId, isSelect]);

  return (
    <div className={style.container}>
        <img alt='heart' src={isLogin && isLiked ? redHeart : emptyHeart} className={style.heart_icon} onClick={()=>{setIsSelect(true)}}/>
        <div className={isLogin ? style.heart_text : style.login_text}>{isLogin ? totalLike : `로그인 해주세요`}</div>
    </div>
  )
}
export default SayingLike;