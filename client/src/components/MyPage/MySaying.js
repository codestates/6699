import style from './MySaying.module.css'
import MyPagePagenation from './MyPagePagenation'
import MySayingBox from './MySayingBox';
import {useState} from 'react'
import{setSayings} from '../../store/MySlice'
import{useSelector, useDispatch} from 'react-redux';
function MySaying(){ /*나의 명언*/

    const dispatch = useDispatch();
    const { sayings } = useSelector((state) => state.mypage);
    
    return (
        <div className={style.container}>
        {sayings.length >0? sayings.map((el) =>
        <MySayingBox 
        saying={el}
         key={el.id}/>)
        :("내가 작성한 명언이 없습니다.")}
        <div className={style.pagenation_wrapper}>
        <MyPagePagenation/>
        </div>
        </div>
    )
}
export default MySaying;