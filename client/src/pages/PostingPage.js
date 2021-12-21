import style from '../pages/PostingPage.module.css'
import PostingCommentBox from '../components/PostingPage/PostingCommentBox'
import{useState} from 'react'
import PostingMiniModal from '../components/PostingPage/PostingMiniModal';
import Modal from '../components/Modal';
import PostingMakeCommentBox from '../components/PostingPage/PostingMakeCommentBox'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

function PostingPage(){
const [isOpen,setIsOpen] = useState(false);

  // const getArticle = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${REACT_APP_API_URL}/:sayingId/article/:articleId`,
  //       { withCredentials: true }
  //       );
  //       if(response.data !== undefined){
    
  //       }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

    return(
    <div className= {style.container}>

    <div className={style.jumbotron_wrapper}>
    <div className={style.jumbotron}>
      <div className={style.left_66}/>
      <div className={style.right_99}/>
      <div className={style.saying}>땀은 지방의 눈물이다.</div>
    </div>
    </div>
     
    <div className= {style.under_jumbotron}>
    <div id={style.title_box}>
    <p id={style.title}>0627 서핑은 못참지</p>
    <div className = {style.setting_toggle} onClick={()=> {
      !isOpen
      ?setIsOpen(true)
      :setIsOpen(false)
     }}>
      {isOpen
        ?isOpen &&
        <Modal isOpenModal={isOpen} setIsOpen={setIsOpen}>
          <PostingMiniModal/>
        </Modal>
        :null  
      }
    </div>
    </div>
    <div id={style.image}></div>

   <div id= {style.top_wrapper}>
   <div className= {style.like_wrapper}>
    <div id={style.like_button}></div>
    <p>63</p>
    <div id={style.view}></div>
    <p>87</p>
    </div>

    <div className= {style.user_box}>
    <div id={style.user_profile_image}></div>
    <p>다급한너구리님</p>
    </div>
    
    </div>
    <div className= {style.down_wrapper}>

    <div id={style.content_boundary}>
     <div id={style.content}>
      전부터 서핑해보고 싶었는데 살도 뺄겸 취미도 만들겸 도전해봄ㅋㅋ
      </div>
    </div>
      <div id={style.created_at}>21년06월27일</div>
    <PostingMakeCommentBox/>
    <PostingCommentBox/>

    </div>
    <button id={style.see_more_btn}>더보기</button>
  </div> 
  </div>
    )
}
export default PostingPage;