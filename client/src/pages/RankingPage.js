import './RankingPage.css'
import Footer from '../components/Footer';
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
              <div className='rankingpage-ranking-box-medal-zone-top-3-medal'/>
              <div className='rankingpage-ranking-box-medal-zone-top-3-medal'/>
              <div className='rankingpage-ranking-box-medal-zone-top-3-medal'/>
            </div>
            <div className='rankingpage-ranking-box-medal-zone-top-12'>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'/>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'/>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'/>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'/>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'/>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'/>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'/>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'/>
              <div className='rankingpage-ranking-box-medal-zone-top-12-ranking'/>
            </div>
          </div>
          <div className='rankingpage-ranking-box-saying-zone'>
            <div className='rankingpage-ranking-box-saying-zone-top-3'>
              <div className='rankingpage-ranking-box-saying-zone-top-3-saying'/>
              <div className='rankingpage-ranking-box-saying-zone-top-3-saying'/>
              <div className='rankingpage-ranking-box-saying-zone-top-3-saying'/>
            </div>
            <div className='rankingpage-ranking-box-saying-zone-top-12'>
              <div className='rankingpage-ranking-box-saying-zone-top-12-saying'/>
              <div className='rankingpage-ranking-box-saying-zone-top-12-saying'/>
              <div className='rankingpage-ranking-box-saying-zone-top-12-saying'/>
              <div className='rankingpage-ranking-box-saying-zone-top-12-saying'/>
              <div className='rankingpage-ranking-box-saying-zone-top-12-saying'/>
              <div className='rankingpage-ranking-box-saying-zone-top-12-saying'/>
              <div className='rankingpage-ranking-box-saying-zone-top-12-saying'/>
              <div className='rankingpage-ranking-box-saying-zone-top-12-saying'/>
              <div className='rankingpage-ranking-box-saying-zone-top-12-saying'/>
            </div>
          </div>
          <div className='rankingpage-ranking-box-ViewMoreButton'>더 보기</div>
      </div>
      <Footer/>
    </div>     
  )
}
export default RankingPage;