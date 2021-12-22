import style from '../components/Header.module.css'
import defaultImg from '../images/userImage_default.png'
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { all } from '../store/LandingSlice';
import { showLoginModal } from '../store/ModalSlice';
import { REACT_APP_API_URL } from '../config';

function Header(){
    const dispatch = useDispatch();
    const { isLogin, userInfo } = useSelector((state) => state.auth);

    console.log('마이페이지 / userInfo: ', userInfo)

    const goAllPage = () => {
        dispatch(all());
    }

    return (
        <div id ={style.box}>
            <Link onClick={()=>{goAllPage()}} to ='/mainpage'><div id ={style.logo}/></Link>
            <div id ={style.search_box}>
                {/* <div className = {style.search}></div> */}
            </div>
            {isLogin ? 
            <Link to ='/mypage'>
                <img alt='profileImg' src={userInfo.image ? `${REACT_APP_API_URL}/upload/${userInfo.image}` : defaultImg} className={style.user_btn}></img>
            </Link> : 
            <button id={style.login_btn} onClick={() => dispatch(showLoginModal(true))}>로그인</button>}
        </div>
    )
}

export default Header;