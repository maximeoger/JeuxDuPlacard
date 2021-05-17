import React from 'react';
import CreateAnnouncementModal from 'components/CreateAnnouncementModal';
import { useModalContext, ModalTypeEnum } from './state';

export default function ModalRoot () { 
  const { isOpen, modalType } = useModalContext();

  if(!isOpen) {
    return null;
  }

  switch(modalType) {

    case ModalTypeEnum.CREATE_ANNOUNCEMENT:
      return (<CreateAnnouncementModal/>)

    default:
      return null
  }
}