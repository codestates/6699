import style from './MyLike.module.css'
import MyPagePagenationBtn from './MyPagePagenationBtn'
import React, { useState } from 'react';
import MySayingMiniModal from './MySayingMiniModal';
import Modal from '../Modal';
import MyLikedSayingBox from '../../components/MyPage/MyLikedSayingBox'
import MyLikedPostingBox from './MyLikedPostingBox';
import{useSelector, useDispatch} from 'react-redux';

function MyLike ({handleLikedArticleClick,handleLikedSayingClick}){
    let [isOpen,setIsOpen] = useState(false);
    const [post,setIsPost] = useState(true);
    const { likedSayings } = useSelector((state) => state.mypage);
    const { likedArticles } = useSelector((state) => state.mypage);
    
  function MyPost(){
   setIsPost(true)
  }
  function MySaying(){
    setIsPost(false)
  }
    return (
        <>
        {(post === true)?( 
          //좋아요 누른 게시물
          <div id={style.changing_area}>
          <div id={style.posts_wrap}>
              <div className = {style.posts}>
              {likedArticles.length >0 ? likedArticles.map((el)=>
              <MyLikedPostingBox
              post={el}
              key={el.id}
              />):("나의 게시물이 없어요")}
              </div>
          </div>
          <div id={style.pagenation_wrapper}>
          <MyPagePagenationBtn/>
          </div>
         </div>):(
          //좋아요 누른 명언
        <div className={style.container}>
          {likedSayings.length >0 ? likedSayings.map((el)=>
          <MyLikedSayingBox
          saying ={el}
          key={el.id}
          />)
          :("좋아요를 누른 명언이 없어요")}
        <div className={style.pagenation_wrapper}>
        <MyPagePagenationBtn/>
        </div>
        </div>

        )}
        <div className = {style.saying_toggle} onClick={()=> {
      !isOpen
      ?setIsOpen(true)
      :setIsOpen(false)
     }}>
      {isOpen
        ?isOpen &&
        <Modal isOpenModal={isOpen} setIsOpen={setIsOpen}>
          <MySayingMiniModal 
          MyPost={MyPost} MySaying= {MySaying}
          handleLikedArticleClick= {handleLikedArticleClick}
          handleLikedSayingClick= {handleLikedSayingClick}
           />
        </Modal>
        :null  
      }
    </div>
        </>
    )
}

export default MyLike;