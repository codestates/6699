import { useSelector, useDispatch } from 'react-redux';
import style from '../components/Header.module.css'
import {Link} from 'react-router-dom';
import SignupModal from './MainPage/SignupModal';
import { showLoginModal, showSignupModal } from '../store/ModalSlice';

function Header(){
    const dispatch = useDispatch();
    
    return (
        <div id ={style.box}>
            <Link to ='/mainpage'><div id ={style.logo}/></Link>
            <div id ={style.search_box}>
                <div className = {style.search}></div>
            </div>
            <button id={style.login_btn} onClick={() => dispatch(showLoginModal(true))}>로그인</button>
        </div>
    )
}

export default Header;