import style from '../components/Header.module.css'
import {Link} from 'react-router-dom';
import LoginModal from './MainPage/LoginModal';

function Header(){
    
    return (
        <div id ={style.box}>
            <Link to ='/mainpage'><div id ={style.logo}/></Link>
            <div id ={style.search_box}>
            <div className = {style.search}></div>
            </div>
            <Link to ='/mypage'><button id={style.login_btn}>로그인</button></Link>
        </div>
    )
   }
   export default Header;