import style from './MyLike.module.css'
import MyPagePagenation from './MyPagePagenation'
import React, { useState } from 'react';
import MySayingMiniModal from './MySayingMiniModal';
import Modal from '../Modal';
function MyLike (){
    let [isOpen,setIsOpen] = useState(false);
    return (
        <div id={style.changing_area}>
        <div id={style.posts_wrap}>

        <div id={style.next_to_toggle}>게시물</div>
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
        </div>
    )
}

export default MyLike;