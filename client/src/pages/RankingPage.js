import style from './RankingPage.module.css';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {all, health, study, economy, relationship, love} from '../store/landingSlice';

function RankingPage({store,goAll,goHealth,goStudy,goEconomy,goRelationship,goLove}){
  /* 카테고리별로 가는 함수 */
  function goAllPage(e){
    goAll(store.page);
   }
   function goHealthPage(e){
    goHealth(store.page);
   }
   function goStudyPage(e){
    goStudy(store.page);
   }
   function goEconomyPage(e){
    goEconomy(store.page);
   }
   function goRelationshipPage(e){
    goRelationship(store.page);
   }
   function goLovePage(e){
    goLove(store.page);
   }

  return (
    <div className={style.container}>

      <div className={style.like_box}>

      </div>
      <div className={style.category_box}>
        <div className={style.category_button}>전체</div>
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
                <div className={style.rankingbox_sayingzone_top3_saying}><Link className={style.link} onClick={()=>{goHealthPage(store.page)}} to='/mainpage'>땀은 지방의 눈물이다.</Link></div>
                <div className={style.rankingbox_sayingzone_top3_image1}/>
                <div className={style.rankingbox_sayingzone_top3_like}/>
                <div className={style.rankingbox_sayingzone_top3_likenumber}>130</div>
              </div>
              <div className={style.rankingbox_sayingzone_top3_sayingzone}>
                <div className={style.rankingbox_sayingzone_top3_saying}><Link className={style.link} onClick={()=>{goStudyPage(store.page)}}  to='/mainpage'>늦었다고 생각될 때가 진짜 늦었다.</Link></div>
                <div className={style.rankingbox_sayingzone_top3_image2}/>
                <div className={style.rankingbox_sayingzone_top3_like}/>
                <div className={style.rankingbox_sayingzone_top3_likenumber}>107</div>
              </div>
              <div className={style.rankingbox_sayingzone_top3_sayingzone}>
                <div className={style.rankingbox_sayingzone_top3_saying}><Link className={style.link} onClick={()=>{goRelationshipPage(store.page)}} to='/mainpage'>면에 가위를 대는 것은 예의가 아니다.</Link></div>
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
function mapStateToProps(state)
{return {
  store: state
}};
function mapDispatchToProps(dispatch)
{ return {
  goAll: () => dispatch(all()),
  goHealth: () => dispatch(health()),
  goStudy: () => dispatch(study()),
  goEconomy: () => dispatch(economy()),
  goRelationship: ()=> dispatch(relationship()),
  goLove: ()=> dispatch(love())
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(RankingPage);