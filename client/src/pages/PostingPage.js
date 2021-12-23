import style from '../pages/PostingPage.module.css'
import PostingCommentBox from '../components/PostingPage/PostingCommentBox'
import{ useState, useEffect } from 'react'
import PostingMiniModal from '../components/PostingPage/PostingMiniModal';
import Modal from '../components/Modal';
import PostingMakeCommentBox from '../components/PostingPage/PostingMakeCommentBox'
import axios from 'axios';
import { REACT_APP_API_URL } from '../config';
import { useSelector, useDispatch } from 'react-redux';

function PostingPage () {

const dispatch = useDispatch();

const [isOpen,setIsOpen] = useState(false);

const { isLogin, userInfo } = useSelector((state) => state.auth);
const { focusedSayingId, sayingIdforCreatedArticle, createdArticleId, createdArticleInfo } = useSelector(state => state.main);

// console.log("userInfo 확인 In 게시물 페이지:", userInfo)



// 특정 게시물 조회
// const response = await axios(`${REACT_APP_API_URL}/${focusedSayingId}/article`)

let currentTitle = 'next유'



  

return(
    <div className= {style.container}>

    <div className={style.jumbotron_wrapper}>
    <div className={style.jumbotron}>
      <div className={style.left_66}/>
      <div className={style.right_99}/>
      {/* 현재 명언_게시글 상위 */}
      <div className={style.saying}>땀은 지방의 눈물이다.</div>
    </div>
    </div>
     
    <div className= {style.under_jumbotron}>
    <div id={style.title_box}>
      {/* 게시글 제목 */}
    <p id={style.title}> {createdArticleInfo.title} </p>
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
    {/* 게시글 이미지 */}
    {/* <div id={style.image}></div> */}
      <img
        id={style.post_image}
        alt='postImage'
        src={`${REACT_APP_API_URL}/uploads/${createdArticleInfo.image}`}/>

   <div id= {style.top_wrapper}>
   <div className= {style.like_wrapper}>
    <div id={style.like_button}></div>
    {/* 좋아요 숫자 */}
    <p> {createdArticleInfo.total_like} </p>
    {/* 조회수 숫자 */}
    <div id={style.view}></div>
    <p> {createdArticleInfo.view} </p>
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