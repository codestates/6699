import style from './RankingPage.module.css';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import {all, health, study, economy, relationship, love} from '../store/LandingSlice';
import axios from 'axios';
import RankingDropDown from '../components/RankingPage/RankingDropDown';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { REACT_APP_API_URL } from '../config';

function RankingPage(){
  const dispatch = useDispatch();

  let [isDropDownOpen,setDropDownOpen] = useState(false);
  let [curCategory,setCategory] = useState('전체');
  let [ranking,setRanking] = useState([]);

  const getLikeRaking = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/ranking/like/?category=${curCategory}`,
      {withCredentials: true});
      
      setRanking(response.data.data.allSaying ? response.data.data.allSaying : response.data.data.filteredSaying);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getLikeRaking();
  }, [curCategory]);

  /* For문 함수 */
  /* 순위권밖 순위표 */
  const notTop3NumFunc = () => {
    let notTop3NumArr = [];
    for(let i=3; i<ranking.length-1; i++){
      notTop3NumArr.push(
        <div className={style.rankingbox_medalzone_top12_ranking}>{ranking.length > i && `${i+1}위`}</div>
      );
    }
    return notTop3NumArr;
  }
  /* 1~3등 명언 반복문 */
  const top3RankFunc = () => {
    let top3Arr = [];
    for(let i=0; i<3; i++){
      top3Arr.push(
        <div className={style.rankingbox_sayingzone_top3_sayingzone}>
          <div className={style.rankingbox_sayingzone_top3_saying}>
            <Link className={style.link} onClick={()=>goPage()} to='/mainpage'>
              {ranking.length > i && ranking[i].content}</Link></div>
          {ranking.length > i && <div className={style.rankingbox_sayingzone_top3_image}/>}
          {ranking.length > i && <div className={style.rankingbox_sayingzone_top3_like}/>}
          <div className={style.rankingbox_sayingzone_top3_likenumber}>{ranking.length > i && ranking[i].total_like}</div>
        </div>
      );
    }
    return top3Arr;
  }
  /* 4등~ 명언 반복문 */
  const notTop3RankFunc = () => {
    let notTop3Arr = [];
    for(let i=3; i<ranking.length-1; i++){
      notTop3Arr.push(
        <div className={style.rankingbox_sayingzone_top12_sayingzone}>
          <div className={style.rankingbox_sayingzone_top12_saying}>{ranking.length > i && ranking[i].content}</div>
          <div className={ranking.length > i ? style.rankingbox_sayingzone_top12_image : style.hidden}/>
          {ranking.length > i && <div className={style.rankingbox_sayingzone_top12_like}/>}
          <div className={style.rankingbox_sayingzone_top12_likenumber}>{ranking.length > i && ranking[i].total_like}</div>
        </div>
      );
      
    }
    return notTop3Arr;
  }
  /* 창 닫는 함수 */
  const dropDownOff = () => {
    setDropDownOpen(false)};

  /* 카테고리 선택함수 */
  const clickAll = () => {
    dropDownOff();
    setCategory('전체')
  }
  const clickHealth = () => {
    dropDownOff();
    setCategory('건강')
  }
  const clickStudy = () => {
    dropDownOff();
    setCategory('학습')
  }
  const clickEconomy = () => {
    dropDownOff();
    setCategory('경제')
  }
  const clickRelationship = () => {
    dropDownOff();
    setCategory('인간관계')
  }
  const clickLove = () => {
    dropDownOff();
    setCategory('사랑')
  }

  /* 메인페이지 카테고리 가는 함수 */
  const goPage = () => {
    if(curCategory==='전체') dispatch(all());
    else if(curCategory==='건강') dispatch(health());
    else if(curCategory==='학습') dispatch(study());
    else if(curCategory==='경제') dispatch(economy());
    else if(curCategory==='인간관계') dispatch(relationship());
    else if(curCategory==='사랑') dispatch(love());
  }

  return (
    <div className={style.container}>
      {/* 카테고리 배너 */}
      <div className={curCategory==='전체' && style.category_all}/>
      <div className={curCategory==='건강' && style.category_health}/>
      <div className={curCategory==='학습' && style.category_study}/>
      <div className={curCategory==='경제' && style.category_economy}/>
      <div className={curCategory==='인간관계' && style.category_relationship}/>
      <div className={curCategory==='사랑' && style.category_love}/>
        {/* 카테고리 클릭 드랍다운 */}
        <div className={style.category_button} onClick={() =>{
            !isDropDownOpen
            ?setDropDownOpen(true)
            :setDropDownOpen(false)
        }}>{curCategory}
          {isDropDownOpen&&<RankingDropDown dropDownOff = {dropDownOff} clickAll={clickAll} clickHealth={clickHealth} clickStudy={clickStudy} clickEconomy={clickEconomy} clickRelationship={clickRelationship} clickLove={clickLove}/>}
        </div>

        <div className={style.ranking_box}>
          {/* 순위표 */}
          <div className={style.rankingbox_medalzone}>
            <div className={style.rankingbox_medalzone_top3}>
              {/* 1~3등 순위표 */}
              {ranking.length > 0 && <div className={style.rankingbox_medalzone_top3_medal1}/>}
              {ranking.length > 1 && <div className={style.rankingbox_medalzone_top3_medal2}/>}
              {ranking.length > 2 && <div className={style.rankingbox_medalzone_top3_medal3}/>}
            </div>
            <div className={style.rankingbox_medalzone_top12}>
              {/* 4등~ 순위표 */}
              {notTop3NumFunc()}
            </div>
          </div>

          <div className={style.rankingbox_sayingzone}>
            <div className={style.rankingbox_sayingzone_top3}>
              {/* 1등 ~ 3등 명언 */}
              {top3RankFunc()}
            </div>
            <div className={style.rankingbox_sayingzone_top12}>
              {/* 4등~ 명언 */}
              {notTop3RankFunc()}
            </div>
          </div>
          <div className={style.rankingbox_ViewMoreButton}>더 보기</div>
      </div>
      <Footer/>
    </div>     
  )
}

export default RankingPage;