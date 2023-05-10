'use client';

import useModalStore from '@/store/useModalStore';
import { MouseEventHandler } from 'react';

const Modal = () => {
  const {
    modal: { isOpen, title, content },
    setModal,
  } = useModalStore();

  const handleClose: MouseEventHandler = e => {
    setModal({ isOpen: false, content: '', title: '' });
  };

  return (
    <>
      {isOpen && (
        <div className={'z-10 fixed left-0 top-0 bg-black'}>
          <div className={'flex flex-col justify-center items-center w-screen h-screen'}>
            <h1 className={'text-2xl font-bold'}>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClose}>닫기</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
