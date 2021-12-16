import './MainPageSaying.css'
import {Link} from 'react-router-dom';
function MainPageSaying(){
  return (
    <div className='main-saying-jumbotron'>
    {/* Sub Zone */}
    <div className='main-saying-medal'/>
    <div className='main-saying-sub-box'>
         <Link to='/mainpageplusbutton'></Link>
         <Link className='main-saying-link' to ='/rankingpage'>모든 명언 보기</Link>

      <div className='main-saying-likenew-toggle'/>
      <div className='main-saying-likenew'>좋아요순</div>
      <div className='main-saying-scroll-box'/>
    </div>

  {/* Saying Zone */}
  <div className='main-saying-box'>
    <div className='main-saying-left-66'/>
    <div className='main-saying-right-99'/>
    <div className='main-saying-message'>땀은 지방의 눈물이다.</div>
    <div className='main-saying-sub-message'>칼에 죽는 사람보다<br/>과식으로 죽는 사람이 더 많다.<br/></div>
  </div>  
  {/* Like Box Zone */}
    <div className='main-saying-like-box'>
      <div className='main-saying-profile'/>
      <div className='main-saying-heart-icon'/>
      <div className='main-saying-like-count'>2,453</div>
    </div>

  </div>
  )   
}
export default MainPageSaying;