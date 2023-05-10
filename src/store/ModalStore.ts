import { create } from 'zustand';

type Modal = {
  isOpen: boolean;
  title: string;
  content: string;
};

type ModalStore = {
  modal: Modal;
  setModal: (modal: Modal) => void;
};

const modalStore = create<ModalStore>(set => ({
  modal: {
    isOpen: false,
    title: '',
    content: '',
  },
  setModal: modal => set({ modal }),
}));

export default modalStore;
