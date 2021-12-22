import style from './PostBox.module.css';
import {setArticles, setLikedArticle,setPosts} from '../../store/MainSlice';
import {useSelector,useDispatch} from 'react-redux'
import MainPostingBox from './MainPostingBox';
import { REACT_APP_API_URL } from '../../config';
import {useEffect,useState} from 'react'
import axios from 'axios';
import MainPagination from '../../components/Pagination/MainPagination';

function PostBox(){
  const likeOrNew = useSelector(state => state.main.likeOrNew)
  const getPosts = (data) =>{setPosts(data)};
  const focusedSayingId = useSelector(state => state.main.focusedSayingId);
  // const articles = useSelector((state) => state.mypage.articles);
  const dispatch = useDispatch();
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(9);

  useEffect(()=>{
      const fetchPosts = async () => {
          setLoading(true)
       const res = await axios.get(`${REACT_APP_API_URL}/${focusedSayingId}/article?order=like`,
           {withCredentials: true}
           );
        if (res.data.data.articleInfo.length > 0){
        setPosts(res.data.data.articleInfo);
        setLoading(false)}
        else {
        setPosts([])
        console.log(res.data.data.articleInfo);
        setLoading(false)}
        }
      fetchPosts();
  },[focusedSayingId])
  
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
               <MainPostingBox posts={currentPosts} loading={loading}/>
               </div>
           </div>
           <div id={style.pagenation_wrapper}>
               <MainPagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
           </div>
          </div>
      )
  }
  export default PostBox;

