import React, {  useEffect, useRef } from 'react';

const Modal =({isOpen, setIsOpen, children})=> {
  const wrapperRef = useRef();
  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);

    return()=>{
      document.removeEventListener('mousedown', handleClickOutside);
    }

  })
  const handleClickOutside=(event)=>{
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
    else {
      setIsOpen(true);
    }
  }
 
    return (<div ref={wrapperRef} value={isOpen} className="modal">
      {children}
    </div>);
  
}
export default Modal;