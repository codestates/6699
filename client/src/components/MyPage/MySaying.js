import style from './MySaying.module.css'
import MyPagePagenation from './MyPagePagenation'
import MySayingBox from './MySayingBox';
import {useState} from 'react'
function MySaying(){ /*나의 명언*/
const [saying,setSaying] = useState([]);

    // const getSaying = async () => {
    //     try {
    //       const response = await axios.get(
    //         `${REACT_APP_API_URL}/:sayingId`,
    //         { withCredentials: true }
    //       );
    
    //       setSaying(response.data.filteredSaying);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };

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