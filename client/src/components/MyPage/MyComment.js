import style from './MyComment.module.css'
import MyCommentBox from './MyCommentBox'
import { REACT_APP_API_URL } from '../../config';
import {useState,useEffect} from 'react'
import axios from 'axios';
import MyCommentPagination from '../Pagination/MyCommentPagination'

function MyComment(){

const [comments,setComments] = useState([]);
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
    setComments(res.data.data.filteredArticle);
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
            <div className={style.sayings}>
          <MyCommentBox comments={currentSayings} loading={loading}/>
          </div>
          </div> 
         <div id={style.pagenation_wrapper}>
          <MyCommentPagination commentsPerPage={commentsPerPage} totalPosts={comments.length} paginate={paginate}/>
         </div>
       </div>     
    )
}
export default MyComment;