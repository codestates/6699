import style from './MySaying.module.css'
import MyPagePagenation from './MyPagePagenation'
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