import style from './MySaying.module.css'
import MySayingPagination from '../Pagination/MySayingPagination'
import MySayingBox from './MySayingBox';
import {useState,useEffect} from 'react'
import{setSayings} from '../../store/MySlice'
import{useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {REACT_APP_API_URL} from '../../config'
import DeleteSayingModal from './DeleteSayingModal'

function MySaying(){
const dispatch = useDispatch();
const {sayings} = useSelector((state) => state.mypage)
const [loading,setLoading] = useState(true);
const [currentPage,setCurrentPage] = useState(1);
const [sayingsPerPage,setSayingsPerPage] = useState(4);
const [rendering, setRendering] = useState(true);

useEffect(()=>{
    const fetchPosts = async () => {
     const res = await axios.get(
         `${REACT_APP_API_URL}/user/mysaying`,
         {withCredentials: true}
         )
         if(rendering){
           dispatch(setSayings(res.data.data.filteredSaying))
           setRendering(false)
           setLoading(false);         
         }
    }
    fetchPosts();
},[rendering])

//Get current posts
const indexOfLastSaying = currentPage * sayingsPerPage;
const indexOfFirstSaying = indexOfLastSaying - sayingsPerPage;
const currentSayings = sayings.slice(indexOfFirstSaying,indexOfLastSaying);

//Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className={style.changing_area}>
            <div id={style.sayings_wrap}>
          <MySayingBox sayings={currentSayings} loading={loading}/>
         </div>
         <div className={style.pagenation_wrapper}>
          <MySayingPagination sayingsPerPage={sayingsPerPage} totalPosts={sayings.length} paginate={paginate}/>
         </div>
         {/* <DeleteSayingModal/> */}
        </div>
    )
}
export default MySaying;