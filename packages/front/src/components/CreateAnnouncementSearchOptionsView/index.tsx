import React from 'react';
import styles from './index.module.scss';
import { SearchMethodCard } from 'components/design-system/organisms/SearchMethodCard';
import { Space } from 'components/styles/Space';

interface IProps {
  goToScanBarcodeStep: () => void;
  goToChooseArticleType: () => void;
}

const CreateAnnouncementSearchOptionsView = ({goToScanBarcodeStep, goToChooseArticleType}: IProps) => {
  return (
    <div className={styles.container}>
      <Space up={24}>
        <div className={styles.options}>
      
          <SearchMethodCard 
            buttonText="Scanner le code-barre"
            methodDescription="Utilisez la caméra de votre téléphone pour retrouver les informations de votre jeu à partir de son code-barre"
            onButtonClick={goToScanBarcodeStep}
          />

          <SearchMethodCard 
            buttonText="Rechercher un jeu"
            methodDescription="Utilisez notre moteur de recherche pour trouver les informations du jeu que vous souhaitez vendre"
            onButtonClick={goToChooseArticleType}
          />
         
        </div>
      </Space>
    </div>
  )
}

export default CreateAnnouncementSearchOptionsView;
