import style from './MyLikedSaying.module.css'
import MyLikedSayingBox from './MyLikedSayingBox'
import MyLikedSayingPagination from '../Pagination/MyLikedSayingPagination'
import {useState,useEffect} from 'react'
import axios from 'axios';
import {REACT_APP_API_URL} from '../../config'
import MySayingMiniModal from './MySayingMiniModal';
import Modal from '../Modal';
import{useDispatch,useSelector} from 'react-redux'
import {setLikedSaying, setSayings} from '../../store/MySlice'

function MyLikedSaying(){
const dispatch = useDispatch();
//토글 open여부 확인 state
let [isOpen,setIsOpen] = useState(false);

//좋아요 누른 명언 state
const {likedSayings} = useSelector((state) => state.mypage)
const [loading,setLoading] = useState(true);
const [currentPage,setCurrentPage] = useState(1);
const [sayingsPerPage,setSayingsPerPage] = useState(4);
const [rendering, setRendering] = useState(true);

useEffect(()=>{
  const fetchPosts = async () => {
   const res = await axios.get(
       `${REACT_APP_API_URL}/user/mylike`,
       {withCredentials: true}
       );
       if(rendering){
           dispatch(setLikedSaying(res.data.data.filteredLike))
           setRendering(false);
           setLoading(false);
       }
  }
  fetchPosts();
},[rendering])

//Get current posts
const indexOfLastSaying = currentPage * sayingsPerPage;
const indexOfFirstSaying = indexOfLastSaying - sayingsPerPage;
const currentSayings = likedSayings.slice(indexOfFirstSaying,indexOfLastSaying);

//Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <div className={style.changing_area}>
            <div id={style.sayings_wrap}>
          <MyLikedSayingBox sayings={currentSayings} loading={loading}/>
          </div> 
         <div id={style.pagenation_wrapper}>
          <MyLikedSayingPagination sayingsPerPage={sayingsPerPage} totalPosts={likedSayings.length} paginate={paginate}/>
         </div>
      </div>
       {/*토글*/}
       {/* <div className = {style.saying_toggle} onClick={()=> {
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
    </div>   */}
    </>
  )
}

export default MyLikedSaying;