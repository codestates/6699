import style from './MyComment.module.css'
import MyCommentBox from './MyCommentBox'
import { REACT_APP_API_URL } from '../../config';
import {useState,useEffect} from 'react'
import{setComments} from '../../store/MySlice'
import axios from 'axios';
import MyCommentPagination from '../Pagination/MyCommentPagination'
import {useDispatch,useSelector} from 'react-redux'

function MyComment(){
const dispatch = useDispatch();
const {comments} = useSelector((state) => state.mypage)
const [loading,setLoading] = useState(false);
const [currentPage,setCurrentPage] = useState(1);
const [commentsPerPage,setCommentsPerPage] = useState(4);

useEffect(()=>{
  const fetchPosts = async () => {
      setLoading(true)
   const res = await axios.get(
       `${REACT_APP_API_URL}/user/mycomment`,
       {withCredentials: true}
       );
    dispatch(setComments(res.data.data.filteredArticle))
    setLoading(false);
  }
  fetchPosts();
},[])

//Get current posts
const indexOfLastComment = currentPage * commentsPerPage;
const indexOfFirstComment = indexOfLastComment - commentsPerPage;
const currentSayings = comments.slice(indexOfFirstComment,indexOfLastComment);

//Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
          <div className={style.changing_area}>
            <div id={style.sayings_wrap}>
          <MyCommentBox comments={currentSayings} loading={loading}/>
          </div> 
         <div className={style.pagenation_wrapper}>
          <MyCommentPagination commentsPerPage={commentsPerPage} totalPosts={comments.length} paginate={paginate}/>
         </div>
       </div>     
    )
}
export default MyComment;