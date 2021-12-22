import style from './MySayingBox.module.css'
import health from '../../images/health-square-2.png'
import study from '../../images/category_study.png'
import economy from '../../images/economy-square.jpg'
import relationship from '../../images/relationship-square.jpg'
import love from '../../images/love-square.jpg'
import { REACT_APP_API_URL } from '../../config'
import axios from 'axios'

function MySayingBox({sayings,loading}){

  let categoryImage = [health,study,economy,relationship,love];
  let array = ['건강','학습','경제','인간관계','사랑']

//내가 쓴 명언보기
  async function handleDeleteSaying() {
    let sayingId;
      const res1 = await axios.get(
        `${REACT_APP_API_URL}/user/mysaying`,
        {withCredentials: true});
      try{
        console.log(res1.data,data,filteredSaying) //[]
        sayingId = res1.data.data.filteredSaying
        
      } catch (err) {
        console.log(err)
    }
    // const res2 = await axios.delete(
    //   `${REACT_APP_API_URL}/user/mysaying/${sayingId}`, //해당 명언id
    //   {withCredentials: true});
    //   try{
    //     res2
    //   } catch (err) {
    //     console.log(err)
    //   }
  }

  if(loading){
    return <h2>loading...</h2>
  }

 return (
    <div id={style.saying_wrap}>
      {sayings.map(saying => (
         <li key ={saying.id} className={style.saying}>
           {saying.category === '건강' ?
           (<div className={style.category_image} id={style.health}></div>):(null)}
           {saying.category === '학습' ?
           (<div className={style.category_image} id={style.study}></div>):(null)}
           {saying.category === '경제' ?
           (<div className={style.category_image} id={style.economy}></div>):(null)}
           {saying.category === '인간관계' ?
           (<div className={style.category_image} id={style.relationship}></div>):(null)}
           {saying.category === '사랑' ?
           (<div className={style.category_image} id={style.love}></div>):(null)}

           <button id={style.trashcan} 
           onClick={()=> handleDeleteSaying()}>
           </button>
           <div id={style.set_title_middle_box}>
        <div className={style.title}>
        <div id={style.icon_66}></div>
        <p id={style.saying}>{saying.content}</p>
        <div id={style.icon_99}></div>
        </div>
        </div>
    
          <div className={style.icon_box}>
          <div id={style.heart}></div>
          <div id={style.post}></div>
         </div>
         </li>
      ))}
      </div>
 )   
}

export default MySayingBox;