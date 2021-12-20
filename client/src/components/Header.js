import { useSelector, useDispatch } from 'react-redux';
import style from '../components/Header.module.css'
import {Link} from 'react-router-dom';
import { all } from '../store/LandingSlice';
import { showLoginModal } from '../store/ModalSlice';

function Header(){
    const page = useSelector(state => state.landing.page);
    const { isLogin, userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const goAllPage = () => {
        dispatch(all());
    }

    return (
        <div id ={style.box}>
            <Link onClick={()=>{goAllPage()}} to ='/mainpage'><div id ={style.logo}/></Link>
            <div id ={style.search_box}>
                <div className = {style.search}></div>
            </div>
            {isLogin ? <Link to ='/mypage'><button id={style.user_btn}/></Link> : <button id={style.login_btn} onClick={() => dispatch(showLoginModal(true))}>로그인</button>}
        </div>
    )
}

export default Header;