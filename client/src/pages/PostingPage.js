import style from '../pages/PostingPage.module.css'
import PostingCommentBox from '../components/PostingPage/PostingCommentBox'
import{ useState, useEffect } from 'react'
import PostingMiniModal from '../components/PostingPage/PostingMiniModal';
import Modal from '../components/Modal';
import PostingMakeCommentBox from '../components/PostingPage/PostingMakeCommentBox'
import axios from 'axios';
import { REACT_APP_API_URL } from '../config';
import { useSelector, useDispatch } from 'react-redux';

import DeletePostModal from '../components/MainPage/DeletePostModal.js';

//
import { getTotalComment } from '../store/MainSlice'

let commentersImg = []



function PostingPage () {

const dispatch = useDispatch();

const [isOpen, setIsOpen] = useState(false);

const { isLogin, userInfo } = useSelector((state) => state.auth);
const { sayingInfoCreatedArticle, createdArticleInfo, totalComment } = useSelector(state => state.main);




// 주의! sayingInfoCreatedArticle: 현재 선택된 명언의 정보를 가지고 있음 (객체)
// 주의! createdArticleInfo: 현재 작성된 게시글의 정보를 가지고 있음 (객체)

/************* 게시글 작성 날짜 및 시간 (업데이트 기준) *******************/
let date = createdArticleInfo.updatedAt.split('').slice(0, 10)
let year = date.slice(2, 4).join('')
let month = date.slice(5, 7).join('')
let day = date.slice(8).join('')

let time = createdArticleInfo.updatedAt.split("").slice(11, 16).join('')
/***********************************************************************/

/**************************** 게시글 댓글 ******************************/

// 현재 선택한 명언 ID (sayingId)
const currentSayingId = sayingInfoCreatedArticle.id
// 현재 작성한 게시글 ID (articleId)
const currentArticleId = createdArticleInfo.id

// 댓글이 작성 버튼이 클릭했을때마다 state의 boolean 값은 바뀐다
const [commentPostBtn, setCommentPostBtn] = useState(false)

// 댓글이 작성 버튼이 클릭했을때, 댓글 정보를 다시 받아온다
useEffect(async () => {

  commentersImg = []

  console.log("PostingPage - 게시하기 버튼 클릭 useEffect")

  //   [GET] 게시글 댓글 조회
  // ~/:sayingId/article/:articleId/comment
  // response 변수에 서버 응답결과를 담는다
  const response = await axios.get(
    `${REACT_APP_API_URL}/${currentSayingId}/article/${currentArticleId}/comment`,
    { withCredentials: true }
    )

    console.log("PostingPage - response.data.data 확인", response.data.data)

    // article1에 달려있는 모든 댓글정보를 가져온게 response.data.data [{user_id = 1}, {2}, {3}]

    // 댓글이 있을때,
    if(response.data.data) {
      dispatch(getTotalComment(response.data.data.commentInfo));

      for(let i = 0; i < response.data.data.commentInfo.length; i++) {
        let userId = response.data.data.commentInfo[i].user_id
        let userWholeInfo = await axios.get(`${REACT_APP_API_URL}/user/${userId}`)
        // {username, image, introduction ....}
        // commentersImg = [{img}, {img}, {img}]

        commentersImg.push(userWholeInfo.data.data.userInfo[0].image)
      }
    } else {
      dispatch(getTotalComment([]));
    }

}, [commentPostBtn])

console.log("commentersImg - useEffect 외부:", commentersImg)

// 댓글 작성 버튼이 눌리면, 다음이 실행된다 
const detectCommentPostBtn = () => {
  setCommentPostBtn(!commentPostBtn)
}

// 삭제버튼 테스트!!!!
const [isDelete, setIsDelete] = useState(false);

const handleDropaccountModal = () => {
  setIsDelete(!isDelete)
}

/***********************************************************************/

return(
    <div className= {style.container}>
      {isDelete 
        ? <DeletePostModal 
        handleDropaccountModal={handleDropaccountModal} 
        sayingInfoCreatedArticle={sayingInfoCreatedArticle} 
        createdArticleInfo={createdArticleInfo}/> 
        : null}

    <div className={style.jumbotron_wrapper}>
    <div className={style.jumbotron}>
      <div className={style.left_66}/>
      <div className={style.right_99}/>
      {/* 현재 명언_게시글 */}
      <div className={style.saying}> {sayingInfoCreatedArticle.content} </div>
    </div>
    </div>
     
    <div className= {style.under_jumbotron}>
    <div id={style.title_box}>
      {/* 게시글 제목 */}
    <p id={style.title}> {createdArticleInfo.title} </p>
  
    {/* 삭제버튼 테스트 */}
      <div 
        className = {style.setting_toggle} 
        onClick={() => {handleDropaccountModal()}}>
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
      {/* 유저 프로필 이미지 */}
    {/* <div id={style.user_profile_image}></div> */}
    <img
        id={style.user_profile_image}
        alt='postImage'
        src={`${REACT_APP_API_URL}/uploads/${userInfo.image}`}/>
      {/* 유저 닉네임 */}
    <p> {userInfo.username} </p>
    </div>
    
    </div>
    <div className= {style.down_wrapper}>

    <div id={style.content_boundary}>
      {/* 게시글 내용 (content) */}
     <div id={style.content}>
       {createdArticleInfo.content}
     </div>
    </div>
    {/* 작성 혹은 업데이트 날짜 및 시간 */}
      <div id={style.created_at}>{year}년{month}월{day}일 {time}</div>

      {/*------------------------ 게시글 댓글 ------------------------------ */}
      {/* 게시글 댓글 작성 컴포넌트 */}
      <PostingMakeCommentBox detectCommentPostBtn={detectCommentPostBtn} />
      {/* 작성된 댓글 display 컴포넌트 */}
      {/* 작성된 댓글 개수만큼 컴포넌트가 실행되야함 */}
      { Array.isArray(totalComment) ?
        totalComment.map((commentInfo, idx) => {
        return (<PostingCommentBox  
                   commentersImg={commentersImg}
                   idx={idx}
                   commentInfo={commentInfo} 
                   sayingInfoCreatedArticle={sayingInfoCreatedArticle}
                   createdArticleInfo={createdArticleInfo}
                />) 
              })
        : null
      }


      {/*------------------------ 게시글 댓글 ------------------------------ */}

    </div>
    {/* 더보기 버튼 */}
    <button id={style.see_more_btn}>더보기</button>
  </div> 
  </div>
    )
}
export default PostingPage;