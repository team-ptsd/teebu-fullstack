'use client';

import { MouseEventHandler } from 'react';
import useModalStore from '@/store/useModalStore';

const Modal = () => {
  const {
    modal: { isOpen, title, content },
    setModal,
  } = useModalStore();

  const handleClose: MouseEventHandler = () => {
    setModal({ isOpen: false, content: '', title: '' });
  };

  return (
    <>
      {isOpen && (
        <div className={'z-10 flex flex-col justify-center items-center fixed left-0 top-0 bg-black/50 w-full h-full'}>
          <div className={'bg-white dark:bg-slate-600 p-2 md:p-4 rounded-xl flex flex-col gap-4'}>
            <h1 className={'text-2xl font-bold text-center'}>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClose}>닫기</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
