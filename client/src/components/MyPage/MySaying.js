import style from './MySaying.module.css'
import MyPagePagenation from './MyPagePagenation'
import MySayingBox from './MySayingBox';
import {useState} from 'react'

function MySaying({sayings}){ /*나의 명언*/

    //   const handleDelete = async (e) => {
    //     const postId = e.target.id;
    //     try {
    //       await axios.delete(`${REACT_APP_API_URL}/posts/${postId}`, {
    //         withCredentials: true
    //       });
    //       getSaying();
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
console.log(saying)
    return (
        <div className={style.container}>
        {saying.length >0? sayings.map((el) =>
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