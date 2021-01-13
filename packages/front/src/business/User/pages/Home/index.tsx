import React from 'react';
import { Text } from 'design-system/atoms/Text';
import { PageTitle } from 'design-system/molecules/PageTitle';
import { PageWrapper } from 'design-system/styles/PageWrapper';
import styles from './index.module.scss';

export default function HomePage(){
  return (
    <PageWrapper>
      <div className={styles.homePageLayout}>
        <PageTitle>Bienvenue</PageTitle>
        <Text>
          Le programme de reprise d’occasion vous permet de proposer vos anciens jeux en échange de remise sur tout le catalogue de la boutique facilement.
          <br/> 
          Vous pouvez également choisir d’être payés par virement ou sur votre compte paypal.
        </Text>
      </div>
    </PageWrapper>
  )
}

