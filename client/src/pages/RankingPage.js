import style from './RankingPage.module.css';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import {all, health, study, economy, relationship, love} from '../store/LandingSlice';
import RankingLikeNewModal from '../components/RankingPage/RankingLikeNewModal';
import RankingDropDown from '../components/RankingPage/RankingDropDown';
import React, {useState} from 'react';
import {useSelector, useDispatch } from 'react-redux';

function RankingPage(){
  let [isToggleOpen,setToggleOpen] = useState(false);
  let [isDropDownOpen,setDropDownOpen] = useState(false);
  let [isLikeOrNew,setLikeNew] = useState('좋아요순');
  let [curCategory,setCategory] = useState('전체');


  /* 창 닫는 함수 */
  const toggleOff = () => {
    setToggleOpen(false)};
  const dropDownOff = () => {
    setDropDownOpen(false)};
  
  /* 좋아요, 최신순 선택함수 */
  const clickLike = () => {
    toggleOff();
    setLikeNew('좋아요순')};
  const clickNew = () => {
    toggleOff();
    setLikeNew('최신순')};


  /* 카테고리 선택함수 */
  const clickAll = () => {
    dropDownOff();
    setCategory('전체')}
  const clickHealth = () => {
    dropDownOff();
    setCategory('건강')}
  const clickStudy = () => {
    dropDownOff();
    setCategory('학습')}
  const clickEconomy = () => {
    dropDownOff();
    setCategory('경제')}
  const clickRelationship = () => {
    dropDownOff();
    setCategory('인간관계')}
const clickLove = () => {
    dropDownOff();
    setCategory('사랑')}

  const page = useSelector(state => state.landing.page);
  const dispatch = useDispatch();
  /* 카테고리별로 가는 함수 */
  function goAllPage(){
    dispatch(all());
   }
   function goHealthPage(){
    dispatch(health());
   }
   function goStudyPage(){
    dispatch(study());
   }
   function goEconomyPage(){
    dispatch(economy());
   }
   function goRelationshipPage(){
    dispatch(relationship());
   }
   function goLovePage(){
    dispatch(love());
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
          <div className={style.likenew}>{isLikeOrNew}</div>
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
              <div className={style.rankingbox_medalzone_top3_medal1}/>
              <div className={style.rankingbox_medalzone_top3_medal2}/>
              <div className={style.rankingbox_medalzone_top3_medal3}/>
            </div>
            <div className={style.rankingbox_medalzone_top12}>
              <div className={style.rankingbox_medalzone_top12_ranking}>4위</div>
              <div className={style.rankingbox_medalzone_top12_ranking}>5위</div>
              <div className={style.rankingbox_medalzone_top12_ranking}>6위</div>
              <div className={style.rankingbox_medalzone_top12_ranking}>7위</div>
              <div className={style.rankingbox_medalzone_top12_ranking}>8위</div>
              <div className={style.rankingbox_medalzone_top12_ranking}>9위</div>
              <div className={style.rankingbox_medalzone_top12_ranking}>10위</div>
              <div className={style.rankingbox_medalzone_top12_ranking}>11위</div>
              <div className={style.rankingbox_medalzone_top12_ranking}>12위</div>
            </div>
          </div>
          <div className={style.rankingbox_sayingzone}>
            <div className={style.rankingbox_sayingzone_top3}>
              <div className={style.rankingbox_sayingzone_top3_sayingzone}>
                <div className={style.rankingbox_sayingzone_top3_saying}><Link className={style.link} onClick={()=>{goHealthPage()}} to='/mainpage'>땀은 지방의 눈물이다.</Link></div>
                <div className={style.rankingbox_sayingzone_top3_image1}/>
                <div className={style.rankingbox_sayingzone_top3_like}/>
                <div className={style.rankingbox_sayingzone_top3_likenumber}>130</div>
              </div>
              <div className={style.rankingbox_sayingzone_top3_sayingzone}>
                <div className={style.rankingbox_sayingzone_top3_saying}><Link className={style.link} onClick={()=>{goStudyPage()}}  to='/mainpage'>늦었다고 생각될 때가 진짜 늦었다.</Link></div>
                <div className={style.rankingbox_sayingzone_top3_image2}/>
                <div className={style.rankingbox_sayingzone_top3_like}/>
                <div className={style.rankingbox_sayingzone_top3_likenumber}>107</div>
              </div>
              <div className={style.rankingbox_sayingzone_top3_sayingzone}>
                <div className={style.rankingbox_sayingzone_top3_saying}><Link className={style.link} onClick={()=>{goRelationshipPage()}} to='/mainpage'>면에 가위를 대는 것은 예의가 아니다.</Link></div>
                <div className={style.rankingbox_sayingzone_top3_image3}/>
                <div className={style.rankingbox_sayingzone_top3_like}/>
                <div className={style.rankingbox_sayingzone_top3_likenumber}>90</div>
              </div>
            </div>
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
              <div className={style.rankingbox_sayingzone_top12_sayingzone}>  
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
              </div>
            </div>
          </div>
          <div className={style.rankingbox_ViewMoreButton}>더 보기</div>
      </div>
      <Footer/>
    </div>     
  )
}

export default RankingPage;