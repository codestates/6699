import style from './SayingLike.module.css';
import blackHeart from '../../images/Black_Heart.png';
import redHeart from '../../images/Red_Heart.png';

function SayingLike(){
  return (
    <div className={style.container}>
        <img alt='heart' src={redHeart} className={style.heart_icon}/>
    </div>
  )
}
export default SayingLike;