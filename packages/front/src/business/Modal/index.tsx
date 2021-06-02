import React from 'react';
import { useModalContext, ModalTypeEnum } from './state';
import RetrieveExistingArticleModal from 'components/RetrieveExistingArticleModal';


/**
 * todo : implements SCAN_BARCODE
 * todo : implements RETRIEVE_EXISTING_ARTICLE
 * 
 * @returns null | React.Reactchildren
 */
export default function ModalRoot () { 
  const { isOpen, modalType } = useModalContext();

  if(!isOpen) {
    return null;
  }

  switch(modalType) {
    
    case ModalTypeEnum.RETRIEVE_EXISTING_ARTICLE:
      return (<RetrieveExistingArticleModal/>)

    case ModalTypeEnum.SCAN_BARCODE:
      return null

    default:
      return null
  }
}