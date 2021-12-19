import style from './MyCommentBox.module.css'
import React, { useState } from 'react';
import PostMiniModal from './PostMiniModal';
import Modal from '../Modal';

function MyCommentBox(){
    let [isDelete, setIsDelete] = useState(false);
    return (
        <div className={style.box}>
        <div className={style.category_image}></div>
        <div id={style.trashcan} onClick={()=> { console.log("확인")}}></div>        
       
       <div id={style.set_title_middle_box}>
        <div className={style.title}>
        <p id={style.saying} >너구리님 실행력이 되게 좋으시네요</p>
        </div>
        </div>
    
        <div className={style.icon_box}>
        <div id={style.heart} onClick={()=> { console.log("확인")}}></div>
        <div id={style.post}></div>
       </div>
       </div>
    )
}
export default MyCommentBox;

/*
import style from './MainPagePlusButton.module.css';
import React, { useState } from 'react';
import PostMiniModal from './PostMiniModal';
import Modal from '../Modal';


function MainPagePlusButton(){
  let [isOpen,setIsOpen] = useState(false);
  return(
    <div className = {style.plus_button} onClick={()=> {
      !isOpen
      ?setIsOpen(true)
      :setIsOpen(false)
      console.log("확인")
     }}>
      {isOpen
        ?isOpen &&
        <Modal isOpenModal={isOpen} setIsOpen={setIsOpen}>
          <PostMiniModal/>
        </Modal>
        :null  
      }
    </div>
  )
}
export default MainPagePlusButton;
*/