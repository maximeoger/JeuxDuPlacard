import React, { useContext, useState, createContext } from 'react';

export enum ModalTypeEnum {
  CREATE_ANNOUNCEMENT = "CREATE_ANNOUNCEMENT",
  SCAN_BARCODE = "SCAN_BARCODE",
  RETRIEVE_EXISTING_ARTICLE = "RETRIEVE_EXISTING_ARTICLE"
}

type ModalName = keyof typeof ModalTypeEnum;

interface IModalContext {
  isOpen: boolean;
  modalType: ModalName | null;
  setModal: (type: ModalName) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
  isOpen: false,
  modalType: null,
  setModal: () => {},
  closeModal: () => {},
})

function useModalStateProvider () {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalName | null>(null);

  const setModal = (type: ModalName) => {
    setModalType(type);
    setIsOpen(true);
  }

  const closeModal = () =>  {
    setModalType(null);
    setIsOpen(false);
  }

  return {
    isOpen,
    modalType,
    setModal,
    closeModal,
  }
}

export const ModalProvider: React.FC = ({children}) => {
  const value = useModalStateProvider();

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => useContext(ModalContext);