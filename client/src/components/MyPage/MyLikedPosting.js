import style from './MyLikedPosting.module.css'
import React, { useState ,useEffect} from 'react';
import MyPostingMiniModal from './MyPostingMiniModal';
import Modal from '../Modal';
import MyLikedPostingBox from './MyLikedPostingBox';
import axios from 'axios';
import {REACT_APP_API_URL} from '../../config'
import MyLikedPostPagination from '../Pagination/MyLikedPostPagination';
import {useSelector, useDispatch} from 'react-redux';
import{setLikedPost} from '../../store/MySlice';

function MyLikedPosting (){
const dispatch = useDispatch();
//토글 open여부 확인 state
let [isOpen,setIsOpen] = useState(false);

// //좋아요 누른 게시물 state
const {likedPosts} = useSelector((state) => state.mypage)
const [loading,setLoading] = useState(false);
const [currentPage,setCurrentPage] = useState(1);
const [postsPerPage,setPostsPerPage] = useState(6);

useEffect(()=>{
  const fetchPosts = async () => {
      setLoading(true)
   const res = await axios.get(
       `${REACT_APP_API_URL}/user/mylike/?category=article`,
       {withCredentials: true}
       );
       if(res.data.data){
         if(res.data.data.filteredLike){
    dispatch(setLikedPost(res.data.data.filteredLike))
    setLoading(false);
         }
       }
  }
  fetchPosts();
},[])

//Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = likedPosts.slice(indexOfFirstPost,indexOfLastPost);

//Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
          <>
       <div id={style.changing_area}>
         <div id={style.posts_wrap}>
             <div className = {style.posts}>
             <MyLikedPostingBox posts={currentPosts} loading={loading}/>
             </div>
         </div>
         <div id={style.pagenation_wrapper}>
             <MyLikedPostPagination postsPerPage={postsPerPage} totalPosts={likedPosts.length} paginate={paginate}/>
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
          <MyPostingMiniModal/>
        </Modal>
        :null  
      }
    </div>  
    </>
    )
}

export default MyLikedPosting;