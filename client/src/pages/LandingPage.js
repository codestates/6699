/*****done*****/
import Saying from '../components/MainPage/Saying';
import style from './LandingPage.module.css'
import {Link} from 'react-router-dom';
function LandingPage(){
    return(
    <div className={style.container}>
      <Saying/>

      {/* Example Zone */}
      <div className={style.example1}>
        <div className={style.ex1_image}/>
        <div className={style.ex1_mention}>
        "땀은 지방의 눈물이다" 
        <br/>명언을 실천하기 위해서 
        <br/>2km 달리고 왔어요!
        <br/>-수상한 펭귄님-
        </div>
 
      </div>
      <div className={style.example2}>
        <div className={style.ex2_image}/>
        <div className={style.ex2_mention}>
        "땀은 지방의 눈물이다" 
        <br/>명언을 실천하기 위해서 
        <br/>2km 달리고 왔어요!
        <br/>-이상한 코끼리님-
        </div>
      </div>
      <div className={style.example3}>
        <div className={style.ex3_image}/>
        <div className={style.ex3_mention}>
        "땀은 지방의 눈물이다"  
        <br/>명언을 실천하기 위해서 
        <br/>2km 달리고 왔어요!

        <br/> -이상한 코끼리님-
        </div>
      </div>


      {/* Big Message Zone */}
      <div className={style.big_message}>
        모두를 움직이게 만드는
        <br/>당신의 명언,        
        <br/>지금 시작해보세요.</div>
        <Link to ='/mainpage'>
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