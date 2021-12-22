import style from './MyLikedSaying.module.css'
import MyLikedSayingBox from './MyLikedSayingBox'
import MyLikedSayingPagination from '../Pagination/MyLikedSayingPagination'
import {useState,useEffect} from 'react'
import axios from 'axios';
import {REACT_APP_API_URL} from '../../config'
import MySayingMiniModal from './MySayingMiniModal';
import Modal from '../Modal';

function MyLikedSaying(){
//토글 open여부 확인 state
let [isOpen,setIsOpen] = useState(false);

//좋아요 누른 명언 state
const [sayings,setSayings] = useState([]);
const [loading,setLoading] = useState(false);
const [currentPage,setCurrentPage] = useState(1);
const [sayingsPerPage,setSayingsPerPage] = useState(4);

useEffect(()=>{
  const fetchPosts = async () => {
      setLoading(true)
   const res = await axios.get(
       `${REACT_APP_API_URL}/user/mylike`,
       {withCredentials: true}
       );
    setSayings(res.data.data.filteredLike);
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
    <>
      <div className={style.changing_area}>
            <div id={style.sayings_wrap}>
            <div className={style.sayings}>
          <MyLikedSayingBox sayings={currentSayings} loading={loading}/>
          </div>
          </div> 
         <div id={style.pagenation_wrapper}>
          <MyLikedSayingPagination sayingsPerPage={sayingsPerPage} totalPosts={sayings.length} paginate={paginate}/>
         </div>
      </div>
       {/*토글*/}
       <div className = {style.saying_toggle} onClick={()=> {
      !isOpen
      ?setIsOpen(true)
      :setIsOpen(false)
     }}>
      {isOpen
        ?isOpen &&
        <Modal isOpenModal={isOpen} setIsOpen={setIsOpen}>
          <MySayingMiniModal/>
        </Modal>
        :null  
      }
    </div>  
    </>
  )
}

export default MyLikedSaying;