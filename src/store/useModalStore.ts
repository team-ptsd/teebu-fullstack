import { create } from 'zustand';

type Modal = {
  isOpen: boolean;
  title: string;
  content: string;
};

type UseModalStore = {
  modal: Modal;
  setModal: (modal: Modal) => void;
};

const useModalStore = create<UseModalStore>(set => ({
  modal: {
    isOpen: false,
    title: '',
    content: '',
  },
  setModal: modal => set({ modal }),
}));

export default useModalStore;
