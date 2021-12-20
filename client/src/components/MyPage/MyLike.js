import style from './MyLike.module.css'
import MyPagePagenation from './MyPagePagenation'
import React, { useState } from 'react';
import MySayingMiniModal from './MySayingMiniModal';
import Modal from '../Modal';
import MySayingBox from '../../components/MyPage/MySayingBox'
function MyLike (){
    let [isOpen,setIsOpen] = useState(false);
    const [post,setIsPost] = useState(true);
  function MyPost(){
   setIsPost(true)
  }
  function MySaying(){
    setIsPost(false)
  }
    return (
        <>
        {(post === true)?( //좋아요 누른 게시물
        <div id={style.changing_area}>
        <div id={style.posts_wrap}>
        <div className = {style.posts}>
        <div id={style.post}></div>
        <div id={style.post}></div>
        <div id={style.post}></div>
        </div>
        <div className={style.posts}>
        <div id={style.post}></div>
        <div id={style.post}></div>
        <div id={style.post}></div>
        </div>
       
        </div>
        <div id={style.pagenation_wrapper}>
        <MyPagePagenation/>
        </div>
        </div>):(//좋아요 누른 명언
        <div className={style.container}>
        <MySayingBox/>
        <MySayingBox/>
        <MySayingBox/>
        <MySayingBox/>
        <MySayingBox/>
        <div className={style.pagenation_wrapper}>
        <MyPagePagenation/>
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
          <MySayingMiniModal MyPost={MyPost} MySaying={MySaying} />
        </Modal>
        :null  
      }
    </div>
        </>
    )
}

export default MyLike;