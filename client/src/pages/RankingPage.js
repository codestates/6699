import './RankingPage.css'
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
function RankingPage(){
  return (
    <div className='rankingpage-container'>

      <div className='rankingpage-like-box'>

      </div>
      <div className='rankingpage-category-box'>
        <div className='rankingpage-category-button'>전체</div>
      </div>

        <div className='rankingpage-ranking-box'>
          <div className='rankingpage-ranking-box-medal-zone'>
            <div className='rankingpage-ranking-box-medal-zone-top-3'>
              <div className='rankingpage-ranking-box-medal-zone-top-3-medal1'/>
              <div className='rankingpage-ranking-box-medal-zone-top-3-medal2'/>
              <div className='rankingpage-ranking-box-medal-zone-top-3-medal3'/>
            </div>
            <div className='rankingpage-ranking-box-medal-zone-top-12'>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'>4위</div>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'>5위</div>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'>6위</div>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'>7위</div>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'>8위</div>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'>9위</div>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'>10위</div>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'>11위</div>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'>12위</div>
            </div>
          </div>
          <div className='rankingpage-ranking-box-saying-zone'>
            <div className='rankingpage-ranking-box-saying-zone-top-3'>
              <div className='rankingpage-ranking-box-saying-zone-top-3-sayingzone'>
                <div className='rankingpage-ranking-box-saying-zone-top-3-saying'><Link className='rankinpage-link' to='/mainpage'>땀은 지방의 눈물이다.</Link></div>
                <div className='rankingpage-ranking-box-saying-zone-top-3-saying-image1'/>
                <div className='rankingpage-ranking-box-saying-zone-top-3-saying-like'/>
                <div className='rankingpage-ranking-box-saying-zone-top-3-saying-likenumber'>130</div>
              </div>
              <div className='rankingpage-ranking-box-saying-zone-top-3-sayingzone'>
                <div className='rankingpage-ranking-box-saying-zone-top-3-saying'><Link className='rankinpage-link' to='/mainpage'>늦었다고 생각될 때가 진짜 늦었다.</Link></div>
                <div className='rankingpage-ranking-box-saying-zone-top-3-saying-image2'/>
                <div className='rankingpage-ranking-box-saying-zone-top-3-saying-like'/>
                <div className='rankingpage-ranking-box-saying-zone-top-3-saying-likenumber'>107</div>
              </div>
              <div className='rankingpage-ranking-box-saying-zone-top-3-sayingzone'>
                <div className='rankingpage-ranking-box-saying-zone-top-3-saying'><Link className='rankinpage-link' to='/mainpage'>면에 가위를 대는 것은 예의가 아니다.</Link></div>
                <div className='rankingpage-ranking-box-saying-zone-top-3-saying-image3'/>
                <div className='rankingpage-ranking-box-saying-zone-top-3-saying-like'/>
                <div className='rankingpage-ranking-box-saying-zone-top-3-saying-likenumber'>90</div>
              </div>
            </div>
            <div className='rankingpage-ranking-box-saying-zone-top-12'>
              <div className='rankingpage-ranking-box-saying-zone-top-12-sayingzone'>  
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying'>피할 수 없으면 즐겨라.</div>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-image'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-like'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-likenumber'>78</div>
              </div>
              <div className='rankingpage-ranking-box-saying-zone-top-12-sayingzone'>  
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying'>삶이 있는 한 희망은 있다.</div>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-image'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-like'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-likenumber'>54</div>             
              </div>
              <div className='rankingpage-ranking-box-saying-zone-top-12-sayingzone'>  
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying'>한 번 실수하는 것보다 두번 묻는 것이 낫다.</div>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-image'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-like'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-likenumber'>47</div>              
              </div>
              <div className='rankingpage-ranking-box-saying-zone-top-12-sayingzone'>  
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying'>가르친다는 것은 곧 두번 이상 배운다는 것이다.</div>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-image'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-like'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-likenumber'>43</div>              
              </div>
              <div className='rankingpage-ranking-box-saying-zone-top-12-sayingzone'>  
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying'>기회는 새와 같은 것, 날아가기 전에 꼭 잡아야 한다.</div>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-image'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-like'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-likenumber'>39</div>              
              </div>
              <div className='rankingpage-ranking-box-saying-zone-top-12-sayingzone'>  
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying'>내가 믿는 사람은 오늘 미룬 일을 해낼 내일의 나… </div>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-image'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-like'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-likenumber'>32</div>              
              </div>
              <div className='rankingpage-ranking-box-saying-zone-top-12-sayingzone'>  
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying'>요구받기 전에 충고하지 말라.</div>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-image'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-like'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-likenumber'>25</div>              
              </div>
              <div className='rankingpage-ranking-box-saying-zone-top-12-sayingzone'>  
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying'>많이 팔려면 먼저 많이 사보라.</div>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-image'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-like'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-likenumber'>21</div>              
              </div>
              <div className='rankingpage-ranking-box-saying-zone-top-12-sayingzone'>  
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying'>너무 고르는 자가 가장 나쁜 것을 갖는다.</div>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-image'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-like'/>
                <div className='rankingpage-ranking-box-saying-zone-top-12-saying-likenumber'>15</div>              
              </div>
            </div>
          </div>
          <div className='rankingpage-ranking-box-ViewMoreButton'>더 보기</div>
      </div>
      <Footer/>
    </div>     
  )
}
export default RankingPage;