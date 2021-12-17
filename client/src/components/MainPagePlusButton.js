import './MainPagePlusButton.css';
import React, { useRef, useState } from 'react';
import PostMiniModal from './PostMiniModal';
  
function MainPagePlusButton(){
  let [isModal,setModal] = useState(false);
  return(
    <div>
      <div className='post-plus' onClick={ () => {setModal(!isModal)
         console.log(isModal)}}/>
        { isModal === true
          ?<PostMiniModal/>
          :null
        }
    </div>
  )
}
export default MainPagePlusButton;