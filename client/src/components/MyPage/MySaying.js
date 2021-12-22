import style from './MySaying.module.css'
<<<<<<< HEAD
import MyPostPagination from '../Pagination/MyPostPagination';
import MySayingBox from './MySayingBox';
import {useState,useEffect} from 'react'
import{setSayings} from '../../store/MySlice'
import{useSelector, useDispatch} from 'react-redux';
=======
import MySayingPagination from '../Pagination/MySayingPagination';
import MySayingBox from './MySayingBox';
import {useState,useEffect} from 'react'
>>>>>>> a47500496db3d82e18861cd94ae23594db338c3d
import axios from 'axios';
import {REACT_APP_API_URL} from '../../config'
function MySaying(){ /*나의 명언*/

const [sayings,setSayings] = useState([]);
const [loading,setLoading] = useState(false);
const [currentPage,setCurrentPage] = useState(1);
<<<<<<< HEAD
const [sayingsPerPage,setSayingsPerPage] = useState(6);
=======
const [sayingsPerPage,setSayingsPerPage] = useState(4);
>>>>>>> a47500496db3d82e18861cd94ae23594db338c3d
    
useEffect(()=>{
    const fetchPosts = async () => {
        setLoading(true)
     const res = await axios.get(
         `${REACT_APP_API_URL}/user/mysaying`,
         {withCredentials: true}
         );
<<<<<<< HEAD
         console.log(res)
=======
>>>>>>> a47500496db3d82e18861cd94ae23594db338c3d
      setSayings(res.data.data.filteredSaying);
      setLoading(false);
    }
    fetchPosts();
},[])

//Get current posts
const indexOfLastSaying = currentPage * sayingsPerPage;
const indexOfFirstSaying = indexOfLastSaying - sayingsPerPage;
const currentSayings = sayings.slice(indexOfFirstSaying,indexOfLastSaying);

//Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
<<<<<<< HEAD
        <div className={style.container}>
          <MySayingBox sayings={currentSayings} loading={loading}/>
         <div className={style.pagenation_wrapper}>
          <MyPostPagination sayingsPerPage={sayingsPerPage} totalPosts={sayings.length} paginate={paginate}/>
=======
        <div className={style.changing_area}>
            <div id={style.sayings_wrap}>
            <div className={style.sayings}>
          <MySayingBox sayings={currentSayings} loading={loading}/>
          </div>
          </div> 
         <div id={style.pagenation_wrapper}>
          <MySayingPagination sayingsPerPage={sayingsPerPage} totalPosts={sayings.length} paginate={paginate}/>
>>>>>>> a47500496db3d82e18861cd94ae23594db338c3d
         </div>
        </div>
    )
}
export default MySaying;