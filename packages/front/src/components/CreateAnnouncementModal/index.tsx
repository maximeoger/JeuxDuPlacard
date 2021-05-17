import React from 'react';
import styles from 'styles/organisms/CreateAnnouncement/index.module.scss';
import { useModalContext } from 'business/Modal/state';
import CreateAnnouncementSearchOptionsView from 'components/CreateAnnouncementSearchOptionsView';
import useStepper from 'technical/utils/useStepper';

enum StepIds {
  CHOOSE_SEARCH_METHOD="CHOOSE_SEARCH_METHOD",
  SCAN_BARCODE="SCAN_BARCODE",
  CHOOSE_ARTICLE_TYPE="CHOOSE_ARTICLE_TYPE",
  SEARCH_RESULTS="SEARCH_RESULTS",
  CREATE_ANNOUNCEMENT_FORM="CREATE_ANNOUNCEMENT_FORM",
  VALIDATION_VIEW="VALIDATION_VIEW"
}

const steps = [
  StepIds.CHOOSE_SEARCH_METHOD,
  StepIds.SCAN_BARCODE,
  StepIds.CHOOSE_ARTICLE_TYPE,
  StepIds.SEARCH_RESULTS,
  StepIds.CREATE_ANNOUNCEMENT_FORM,
  StepIds.VALIDATION_VIEW
]

export default function CreactAnnouncementModal () {
  const { closeModal } = useModalContext();
  const { setNextStep, goToPreviousStep, currentStep } = useStepper(steps);

  const goToScanBarcodeStep = () => setNextStep(StepIds.SCAN_BARCODE);
  const goToChooseArticleType = () => setNextStep(StepIds.CHOOSE_ARTICLE_TYPE);

  const generateStep = (stepId: string) => {
    switch(stepId){
      case StepIds.CHOOSE_SEARCH_METHOD:
        return (
          <>
            <CreateAnnouncementSearchOptionsView goToScanBarcodeStep={goToScanBarcodeStep} goToChooseArticleType={goToChooseArticleType}/>
          </>
        )
      case StepIds.SCAN_BARCODE:
        return (
          <>
            <button onClick={() => goToPreviousStep()}>retour</button>
            <p>Placez le code barre de votre jeu dans le rectangle ci dessous</p>
          </>
        )
      case StepIds.CHOOSE_ARTICLE_TYPE:
        return (
          <>
            <button onClick={() => goToPreviousStep()}>retour</button>
            <p>Rechercher un article</p>
          </>
        )
    }
  }


  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <div className={styles.modal__closeBtn}>
            <button onClick={closeModal}>x</button>
          </div>
        </div>
      
        <div>
          {
            generateStep(currentStep)
          }
        </div>
      </div>
    </div>
  )
}