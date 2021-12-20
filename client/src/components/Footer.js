import style from '../components/Footer.module.css';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {health} from '../store/LandingSlice';
import {useSelector, useDispatch } from 'react-redux';



function Footer(){
  const page = useSelector(state => state.landing.page);
  const dispatch = useDispatch();
  /* 랜딩페이지(건강 카테고리)로 가는 함수 */
  function goHealthPage(){
    dispatch(health());
   }
    return (
        <div id={style.container}>
           <div id={style.logo_wrapper}>
           <Link onClick={()=>{goHealthPage()}} to ='/'><div id= {style.six_nine_logo}></div></Link>
           </div>

           <div className= {style.team_members}>
           <span className= {style.github_logos}>
           <div className= {style.github_logo}></div>
           <div className= {style.github_logo}></div>
           <div className= {style.github_logo}></div>
           <div className= {style.github_logo}></div>
           </span>
           <div className= {style.profiles}>
           <div className = {style.profile}>
           <div>최선영</div>
           <div>Front end</div>
           <div>sy.choi1106@gmail.com</div>
           </div>
           <div className = {style.profile}>
           <div>정재혁</div>
           <div>Front end</div>
           <div>nezcoreen@gmail.com</div>
           </div>
           <div className = {style.profile}>
           <div>김정현</div>
           <div>Back end</div>
           <div>wjd5588@gmail.com</div>
           </div>
           <div className = {style.profile}>
           <div>김기쁨</div>
           <div>Back end</div>
           <div>joykim9311@gmail.com</div>
           </div>
           </div>
           </div>

           <div className ={style.badges}>
           <div id={style.youtube_logo}></div>
           <div id={style.github_logo}></div>
           </div>
           <div id={style.copyright}>Copyrightⓒ 2021 weAct</div>
        </div>
    )
   }

export default Footer;