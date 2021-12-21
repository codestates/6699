import style from'./MyPosting.module.css'
import {setArticles, setLikedArticle} from '../../store/MySlice'
import {useSelector,useDispatch} from 'react-redux'
import MyPostingBox from './MyPostingBox';
import { REACT_APP_API_URL } from '../../config';
import {useEffect,useState} from 'react'
import axios from 'axios';
import Pagination from './Pagination';

function MyPosting(){
// const articles = useSelector((state) => state.mypage.articles);
const dispatch = useDispatch();
const [posts,setPosts] = useState([]);
const [loading,setLoading] = useState(false);
const [currentPage,setCurrentPage] = useState(1);
const [postsPerPage,setPostsPerPage] = useState(6);

useEffect(()=>{
    const fetchPosts = async () => {
        setLoading(true)
     const res = await axios.get(
         `${REACT_APP_API_URL}/user/myarticle`,
         {withCredentials: true}
         );
      setPosts(res.data.data.filteredArticle);
      setLoading(false);
    }
    fetchPosts();
},[])

//Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

//Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div id={style.changing_area}>
         <div id={style.posts_wrap}>
             <div className = {style.posts}>
             <MyPostingBox posts={currentPosts} loading={loading}/>
             </div>
         </div>
         <div id={style.pagenation_wrapper}>
             <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
         </div>
        </div>
    )
}
export default MyPosting;