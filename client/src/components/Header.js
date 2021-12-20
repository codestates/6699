import { useSelector, useDispatch } from 'react-redux';
import style from '../components/Header.module.css'
import {Link} from 'react-router-dom';
import { showLoginModal } from '../store/ModalSlice';

function Header(){
    const dispatch = useDispatch();
    const { isLogin } = useSelector((state) => state.auth);

    return (
        <div id ={style.box}>
            <Link to ='/mainpage'><div id ={style.logo}/></Link>
            <div id ={style.search_box}>
                <div className = {style.search}></div>
            </div>
            {isLogin ? <Link to ='/mypage'><button id={style.login_btn}>마이페이지</button></Link> : <button id={style.login_btn} onClick={() => dispatch(showLoginModal(true))}>로그인</button>}
        </div>
    )
}

export default Header;