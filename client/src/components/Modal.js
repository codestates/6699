import React, {  useEffect, useRef } from 'react';
const Modal =({isOpenModal, setIsOpenModal, children})=> {
  const wrapperRef = useRef();
  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);

    return()=>{
      document.removeEventListener('mousedown', handleClickOutside);
    }

  })
  const handleClickOutside=(event)=>{
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setIsOpenModal(false);
    }
    else {
      setIsOpenModal(true);
    }
  }
 
    return (<div ref={wrapperRef} value={isOpenModal} className="modal">
      {children}

    </div>);
  
}
export default Modal;