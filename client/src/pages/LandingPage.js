import Header from '../components/Header.js'
import Saying from '../components/Saying.js'
import '../pages/LandingPage.css'

function LandingPage(){
    return(
    <div className='landing-container'>
      <Header/>
      <Saying/>
      <div className='landing-example1'>
        <div className='landing-ex1-image'/>
        <div className='landing-ex1-mention'>
        "땀은 지방의 눈물이다" 
        <br/>명언을 실천하기 위해서 
        <br/>2km 달리고 왔어요!
        <br/>-수상한 펭귄님-
        </div>
 
      </div>
      <div className='landing-example2'>
        <div className='landing-ex2-image'/>
        <div className='landing-ex2-mention'>
        "땀은 지방의 눈물이다" 
        <br/>명언을 실천하기 위해서 
        <br/>2km 달리고 왔어요!
        <br/>-이상한 코끼리님-
        </div>
      </div>
      <div className='landing-example3'>
        <div className='landing-ex3-image'/>
        <div className='landing-ex3-mention'>
        "땀은 지방의 눈물이다"  
        <br/>명언을 실천하기 위해서 
        <br/>2km 달리고 왔어요!

        <br/> -이상한 코끼리님-
        </div>
      </div>



      <div className='landing-big-mention'>
        모두를 움직이게 만드는
        <br/>당신의 명언,        
        <br/>지금 시작해보세요.</div>
    <div className='landing-big-6699'>
      <div className='landing-big-66'/>
      <div className='landing-big-99'/>
    </div>
    </div>
    )
}
export default LandingPage;