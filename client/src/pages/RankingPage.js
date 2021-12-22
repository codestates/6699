import style from './RankingPage.module.css';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import {all, health, study, economy, relationship, love} from '../store/LandingSlice';
import axios from 'axios';
import RankingPagination from '../components/Pagination/RankingPagination'
import RankingDropDown from '../components/RankingPage/RankingDropDown';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { REACT_APP_API_URL } from '../config';

function RankingPage(){
  const dispatch = useDispatch();

  // 카테고리 드랍다운, 카테고리, 랭킹
  let [isDropDownOpen,setDropDownOpen] = useState(false);
  let [curCategory,setCategory] = useState('전체');
  let [ranking,setRanking] = useState([]);
  //페이지네이션
  const [currentPage,setCurrentPage] = useState(1);
  const [rankingPerPage,setRankingPerPage] = useState(17);
  //탑3, 비순위권 랭킹 정보
  const top3Ranking = ranking.slice(0, 3);
  const notTop3Ranking = ranking.slice(3);
  // 페이지 정보
  const indexOfLastPost = currentPage * rankingPerPage;
  const indexOfFirstPost = indexOfLastPost - rankingPerPage;
  const currentRanking = notTop3Ranking.slice(indexOfFirstPost,indexOfLastPost);

  // 랭킹 상태 업데이트 (카테고리 변경시마다)
  useEffect(() => {
    const getLikeRaking = async () => {
      try {
        const response = await axios.get(`${REACT_APP_API_URL}/ranking/like/?category=${curCategory}`,
        {withCredentials: true});
        
        setRanking(response.data.data.allSaying ? response.data.data.allSaying : response.data.data.filteredSaying);
      } catch (err) {
        console.log(err);
      }
    };
    getLikeRaking();
  }, [curCategory]);

  // 페이지 변경 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /* For문 함수 (Slice로 스테이트 자르게되어서..map으로 코드 수정 필요*/
  /* 순위권밖 순위표 */
  const notTop3NumFunc = () => {
    let notTop3NumArr = [];
    for(let i=4+((currentPage-1)*17); i<=currentRanking.length+3+((currentPage-1)*17); i++){
      notTop3NumArr.push(
        <div className={style.rankingbox_medalzone_top12_ranking}>{ranking.length >= i && `${i}위`}</div>
      );
    }
    return notTop3NumArr;
  }
  /* 1~3등 명언 반복문 */
  const top3RankFunc = () => {
    let top3Arr = [];
    for(let i=0; i<top3Ranking.length; i++){
      top3Arr.push(
        <div className={style.rankingbox_sayingzone_top3_sayingzone}>
          <div className={style.rankingbox_sayingzone_top3_saying}>
            <Link className={style.link} onClick={()=>goPage()} to='/mainpage'>
              {top3Ranking.length > i && top3Ranking[i].content}</Link></div>
          {top3Ranking.length > i && <div className={style.rankingbox_sayingzone_top3_image}/>}
          {top3Ranking.length > i && <div className={style.rankingbox_sayingzone_top3_like}/>}
          <div className={style.rankingbox_sayingzone_top3_likenumber}>{top3Ranking.length > i && top3Ranking[i].total_like}</div>
        </div>
      );
    }
    return top3Arr;
  }
  /* 4등~ 명언 반복문 */
  const notTop3RankFunc = () => {
    let notTop3Arr = [];
    for(let i=0; i<currentRanking.length; i++){
      notTop3Arr.push(
        <div className={style.rankingbox_sayingzone_top12_sayingzone}>
          <div className={style.rankingbox_sayingzone_top12_saying}>{currentRanking.length > i && currentRanking[i].content}</div>
          <div className={currentRanking.length > i ? style.rankingbox_sayingzone_top12_image : style.hidden}/>
          {currentRanking.length > i && <div className={style.rankingbox_sayingzone_top12_like}/>}
          <div className={style.rankingbox_sayingzone_top12_likenumber}>{currentRanking.length > i && currentRanking[i].total_like}</div>
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
    setCurrentPage(1);
    setCategory('전체')
  }
  const clickHealth = () => {
    dropDownOff();
    setCurrentPage(1);
    setCategory('건강')
  }
  const clickStudy = () => {
    dropDownOff();
    setCurrentPage(1);
    setCategory('학습')
  }
  const clickEconomy = () => {
    dropDownOff();
    setCurrentPage(1);
    setCategory('경제')
  }
  const clickRelationship = () => {
    dropDownOff();
    setCurrentPage(1);
    setCategory('인간관계')
  }
  const clickLove = () => {
    dropDownOff();
    setCurrentPage(1);
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
        <div className={style.pagenation_wrapper}>
          <RankingPagination rankingPerPage={rankingPerPage} totalRanking={ranking.length} paginate={paginate}/>
        </div>
      </div>
      <Footer/>
    </div>     
  )
}

export default RankingPage;