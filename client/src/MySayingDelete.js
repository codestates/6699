import style from './MySayingDelete.module.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showLoginModal, showSignupModal } from './store/ModalSlice';


function MySayingDelete(){
  return (
    <div className={style.container}>
      <div className={style.modalbox}>

      <div className={style.logobox}>
        <Link to='/mainpage'><div id ={style.logoimage} onClick={() => dispatch(showLoginModal(false))}/></Link>
        </div>
      <div className={style.catimagebox}>
        <div id={style.catimage}/>
      </div>

        <div className={style.contentbox}>
            "1일 1식" 명언관 연관된     <br/>
            23개의 게시물이 사라져요.    <br/>
            정말 <b>삭제</b>하시겠어요...?     <br/>
        </div>

        <div className={style.anotherbox}>
          <div className={style.deletebutton}>삭제하기</div>
          <div className={style.cancelbutton}>유지하기</div>
        </div>
      </div>
    </div>
  )
}
export default MySayingDelete;