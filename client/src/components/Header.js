import '../components/Header.css'
import {Link} from 'react-router-dom';
function Header(){
    return (
        <div id ='header-box'>
            <Link to ='/mainpage'><div id ='header-logo'/></Link>
            <div id ='header-search-box'>
            <div className = 'header-search'></div>
            </div>
            <Link to ='/mypage'><button id='header-login-btn'>로그인</button></Link>
        </div>
    )
   }
   export default Header;