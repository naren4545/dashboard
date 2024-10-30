import { useEffect, useRef } from 'react';

import styles from './Modal.module.css'; 

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ children, isOpen }: ModalProps) => {
  
  const modalRef = useRef<HTMLDialogElement | null>(null);
console.log(isOpen)
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.showModal(); 
      console.log("Modal is opened");
    } else if (modalRef.current) {
      modalRef.current.close(); 
    }
  }, [isOpen]);

  return (
  
      <dialog className='shadow-lg rounded-lg overflow-hidden' ref={modalRef}>
        {children}
      </dialog>
    
  );
};

export default Modal;
