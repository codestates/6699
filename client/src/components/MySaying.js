import style from '../components/MySaying.module.css'
import MyPagePagenation from '../components/MyPagePagenation'
import MySayingBox from './MySayingBox';
function MySaying(){ /*나의 명언*/
    return (
        <div className={style.container}>
        <MySayingBox/>
        <MySayingBox/>
        <MySayingBox/>
        <MySayingBox/>
        <MySayingBox/>
        <div className={style.pagenation_wrapper}>
        <MyPagePagenation/>
        </div>
        </div>
    )
}
export default MySaying;