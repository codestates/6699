import style from './MySaying.module.css'
import MyPostPagination from '../Pagination/MyPostPagination';
import MySayingBox from './MySayingBox';
import {useState} from 'react'
import{setSayings} from '../../store/MySlice'
import{useSelector, useDispatch} from 'react-redux';
function MySaying(){ /*나의 명언*/

const [sayings,setSayings] = useState([]);
const [loading,setLoading] = useState(false);
const [currentPage,setCurrentPage] = useState(1);
const [sayingsPerPage,setSayingsPerPage] = useState(6);
// const { sayings } = useSelector((state) => state.mypage);
    
useEffect(()=>{
    const fetchPosts = async () => {
        setLoading(true)
     const res = await axios.get(
         `${REACT_APP_API_URL}/user/mysaying`,
         {withCredentials: true}
         );
      setPosts(res.data.data.filteredSaying);
      setLoading(false);
    }
    fetchPosts();
},[])

//Get current posts
const indexOfLastSaying = currentPage * sayingsPerPage;
const indexOfFirstSaying = indexOfLastPost - sayingsPerPage;
const currentSayings = sayings.slice(indexOfFirstSaying,indexOfLastSaying);

//Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className={style.container}>
          <MySayingBox posts={currentSayings} loading={loading}/>
         <div className={style.pagenation_wrapper}>
          <MyPostPagination sayingsPerPage={postsPerPage} totalPosts={sayings.length} paginate={paginate}/>
         </div>
        </div>
    )
}
export default MySaying;