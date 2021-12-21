import style from './RankingPage.module.css';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import {all, health, study, economy, relationship, love} from '../store/LandingSlice';
import axios from 'axios';
import RankingLikeNewModal from '../components/RankingPage/RankingLikeNewModal';
import RankingDropDown from '../components/RankingPage/RankingDropDown';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { REACT_APP_API_URL } from '../config';

function RankingPage(){
  const dispatch = useDispatch();

  let [isToggleOpen,setToggleOpen] = useState(false);
  let [isDropDownOpen,setDropDownOpen] = useState(false);
  let [isLikeOrNew,setLikeNew] = useState('like');
  let [curCategory,setCategory] = useState('전체');
  let [ranking,setRanking] = useState([]);
  const { page } = useSelector(state => state.landing);

  const getLikeRaking = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/ranking/like/?category=${curCategory}`,
      {withCredentials: true});
      
      setRanking(response.data.data.allSaying ? response.data.data.allSaying : response.data.data.filteredSaying);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(ranking)

  useEffect(() => {
    getLikeRaking();
  }, [curCategory]);

  /* 창 닫는 함수 */
  const toggleOff = () => {
    setToggleOpen(false)};
  const dropDownOff = () => {
    setDropDownOpen(false)};
  
  /* 좋아요, 최신순 선택함수 */
  const clickLike = () => {
    toggleOff();
    setLikeNew('like')
  };
  const clickNew = () => {
    toggleOff();
    setLikeNew('new')
  };
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

  /* 카테고리별로 가는 함수 */
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
       {/* 좋아요순, 최신순 토글 */}
      <div className={style.category_box}>
      <div className={style.like_box}>
          <div className = {style.toggle} onClick={()=> {
            !isToggleOpen
            ?setToggleOpen(true)
            :setToggleOpen(false)
          }}></div>
          <div className={style.likenew}>{isLikeOrNew === 'like' ? '좋아요순' : '최신순'}</div>
        </div>
        {isToggleOpen&&<RankingLikeNewModal toggleOff = {toggleOff} clickLike={clickLike} clickNew={clickNew}/>}
        {/* 카테고리 클릭 드랍다운 */}
        <div className={style.category_button} onClick={() =>{
            !isDropDownOpen
            ?setDropDownOpen(true)
            :setDropDownOpen(false)
        }}>{curCategory}</div>
        {isDropDownOpen&&<RankingDropDown dropDownOff = {dropDownOff} clickAll={clickAll} clickHealth={clickHealth} clickStudy={clickStudy} clickEconomy={clickEconomy} clickRelationship={clickRelationship} clickLove={clickLove}/>}
      </div>

        <div className={style.ranking_box}>
          <div className={style.rankingbox_medalzone}>
            <div className={style.rankingbox_medalzone_top3}>
              {ranking.length > 0 && <div className={style.rankingbox_medalzone_top3_medal1}/>}
              {ranking.length > 1 && <div className={style.rankingbox_medalzone_top3_medal2}/>}
              {ranking.length > 2 && <div className={style.rankingbox_medalzone_top3_medal3}/>}
            </div>
            <div className={style.rankingbox_medalzone_top12}>
              {ranking.map((el)=>
                <div className={style.rankingbox_medalzone_top12_ranking}>위</div>
              )}
              
              {/* <div className={style.rankingbox_medalzone_top12_ranking}>5위</div>
              <div className={style.rankingbox_medalzone_top12_ranking}>6위</div>
              <div className={style.rankingbox_medalzone_top12_ranking}>7위</div>
              <div className={style.rankingbox_medalzone_top12_ranking}>8위</div> */}
          
            </div>
          </div>
          <div className={style.rankingbox_sayingzone}>
            <div className={style.rankingbox_sayingzone_top3}>
              {/* 1등 */}
              <div className={style.rankingbox_sayingzone_top3_sayingzone}>
                <div className={style.rankingbox_sayingzone_top3_saying}>
                  <Link className={style.link} onClick={()=>goPage()} to='/mainpage'>
                    {ranking.length > 0 && ranking[0].content}</Link></div>
                {ranking.length > 0 && <div className={style.rankingbox_sayingzone_top3_image}/>}
                {ranking.length > 0 && <div className={style.rankingbox_sayingzone_top3_like}/>}
                <div className={style.rankingbox_sayingzone_top3_likenumber}>{ranking.length > 0 && ranking[0].total_like}</div>
              </div>
              {/* 2등 */}
              <div className={style.rankingbox_sayingzone_top3_sayingzone}>
                <div className={style.rankingbox_sayingzone_top3_saying}>
                  <Link className={style.link} onClick={()=>goPage()} to='/mainpage'>
                    {ranking.length > 1 && ranking[1].content}</Link></div>
                {ranking.length > 0 && <div className={style.rankingbox_sayingzone_top3_image}/>}
                {ranking.length > 0 && <div className={style.rankingbox_sayingzone_top3_like}/>}
                <div className={style.rankingbox_sayingzone_top3_likenumber}>{ranking.length > 1 && ranking[1].total_like}</div>
              </div>
              {/* 3등 */}
              <div className={style.rankingbox_sayingzone_top3_sayingzone}>
                <div className={style.rankingbox_sayingzone_top3_saying}>
                  <Link className={style.link} onClick={()=>goPage()} to='/mainpage'>
                    {ranking.length > 2 && ranking[2].content}</Link></div>
                {ranking.length > 0 && <div className={style.rankingbox_sayingzone_top3_image}/>}
                {ranking.length > 0 && <div className={style.rankingbox_sayingzone_top3_like}/>}
                <div className={style.rankingbox_sayingzone_top3_likenumber}>{ranking.length > 2 && ranking[2].total_like}</div>
              </div>
            </div>

            {/* 순위권 밖 */}
            <div className={style.rankingbox_sayingzone_top12}>
              <div className={style.rankingbox_sayingzone_top12_sayingzone}>  
                <div className={style.rankingbox_sayingzone_top12_saying}>피할 수 없으면 즐겨라.</div>
                <div className={style.rankingbox_sayingzone_top12_image}/>
                <div className={style.rankingbox_sayingzone_top12_like}/>
                <div className={style.rankingbox_sayingzone_top12_likenumber}>78</div>
              </div>
              <div className={style.rankingbox_sayingzone_top12_sayingzone}>  
                <div className={style.rankingbox_sayingzone_top12_saying}>삶이 있는 한 희망은 있다.</div>
                <div className={style.rankingbox_sayingzone_top12_image}/>
                <div className={style.rankingbox_sayingzone_top12_like}/>
                <div className={style.rankingbox_sayingzone_top12_likenumber}>54</div>             
              </div>
              <div className={style.rankingbox_sayingzone_top12_sayingzone}>  
                <div className={style.rankingbox_sayingzone_top12_saying}>한 번 실수하는 것보다 두번 묻는 것이 낫다.</div>
                <div className={style.rankingbox_sayingzone_top12_image}/>
                <div className={style.rankingbox_sayingzone_top12_like}/>
                <div className={style.rankingbox_sayingzone_top12_likenumber}>47</div>              
              </div>
              <div className= {style.rankingbox_sayingzone_top12_sayingzone}>  
                <div className={style.rankingbox_sayingzone_top12_saying}>가르친다는 것은 곧 두번 이상 배운다는 것이다.</div>
                <div className={style.rankingbox_sayingzone_top12_image}/>
                <div className={style.rankingbox_sayingzone_top12_like}/>
                <div className={style.rankingbox_sayingzone_top12_likenumber}>43</div>              
              </div>
              <div className={style.rankingbox_sayingzone_top12_sayingzone}>  
                <div className={style.rankingbox_sayingzone_top12_saying}>기회는 새와 같은 것, 날아가기 전에 꼭 잡아야 한다.</div>
                <div className={style.rankingbox_sayingzone_top12_image}/>
                <div className={style.rankingbox_sayingzone_top12_like}/>
                <div className={style.rankingbox_sayingzone_top12_likenumber}>39</div>              
              </div>
              {/* <div className={style.rankingbox_sayingzone_top12_sayingzone}>  
                <div className={style.rankingbox_sayingzone_top12_saying}>내가 믿는 사람은 오늘 미룬 일을 해낼 내일의 나… </div>
                <div className={style.rankingbox_sayingzone_top12_image}/>
                <div className={style.rankingbox_sayingzone_top12_like}/>
                <div className={style.rankingbox_sayingzone_top12_likenumber}>32</div>              
              </div>
              <div className={style.rankingbox_sayingzone_top12_sayingzone}>  
                <div className={style.rankingbox_sayingzone_top12_saying}>요구받기 전에 충고하지 말라.</div>
                <div className={style.rankingbox_sayingzone_top12_image}/>
                <div className={style.rankingbox_sayingzone_top12_like}/>
                <div className={style.rankingbox_sayingzone_top12_likenumber}>25</div>              
              </div>
              <div className={style.rankingbox_sayingzone_top12_sayingzone}>  
                <div className={style.rankingbox_sayingzone_top12_saying}>많이 팔려면 먼저 많이 사보라.</div>
                <div className={style.rankingbox_sayingzone_top12_image}/>
                <div className={style.rankingbox_sayingzone_top12_like}/>
                <div className={style.rankingbox_sayingzone_top12_likenumber}>21</div>              
              </div>
              <div className={style.rankingbox_sayingzone_top12_sayingzone}>  
                <div className={style.rankingbox_sayingzone_top12_saying}>너무 고르는 자가 가장 나쁜 것을 갖는다.</div>
                <div className={style.rankingbox_sayingzone_top12_image}/>
                <div className={style.rankingbox_sayingzone_top12_like}/>
                <div className={style.rankingbox_sayingzone_top12_likenumber}>15</div>              
              </div> */}
            </div>
          </div>
          <div className={style.rankingbox_ViewMoreButton}>더 보기</div>
      </div>
      <Footer/>
    </div>     
  )
}

export default RankingPage;