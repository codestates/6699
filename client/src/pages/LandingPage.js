/*****done*****/
import Saying from '../components/LandingPage/Saying';
import style from './LandingPage.module.css'
import { Link } from 'react-router-dom';
import { all } from '../store/LandingSlice';
import { useSelector, useDispatch } from 'react-redux';


function LandingPage(){
  const page = useSelector(state => state.landing.page);
  const dispatch = useDispatch();
  /* 전체 페이지로 가는 함수 */
  function goAllPage(){
    dispatch(all());
   }
    return( 
    <div className={style.container}>
 
     {/* 명언 부분 */}
      <Saying/>

      {/* 큰 메시지 부분 */}
      <div className={style.big_message}>
        모두를 움직이게 만드는
        <br/>당신의 명언,        
        <br/>지금 시작해보세요.</div>
        <Link  onClick={() => {goAllPage()}} to ='/mainpage'>
          <button className={style.start_button}>
            시작하기
          </button>
        </Link>
    <div className={style.big_6699}>
      <div className={style.big_66}/>
      <div className={style.big_99}/>
    </div>
    </div>
    
    )

}

export default LandingPage;