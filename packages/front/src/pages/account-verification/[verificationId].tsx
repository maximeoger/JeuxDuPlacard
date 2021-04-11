import React from 'react';
import { PageTitle } from 'components/molecules/PageTitle';
import { Text } from 'components/atoms/Text';
import { performEmailVerification } from 'business/EmailVerification/services/api';
import { Space } from 'components/styles/Space';
import styles from 'styles/pages/AccountVerification/index.module.scss';

type Context = { 
  params: {
    verificationId: string;
  }
};

export default function AccountVerificationPage() {
  return (
    <section className={styles.section}>
      <div>
    
        <PageTitle>Email confirmé !</PageTitle>
        
        <Space up={32}>
          <Text>Votre adresse email à bien été vérifiée ! Vous pouvez maintenant vous connecter et utiliser l’ensemble des fonctionnalités du site</Text>
        </Space>
      </div>
    </section>
  )
}


export  const getServerSideProps = async (context: Context) => {

  const verificationRequestResult = await performEmailVerification(context.params.verificationId);

  return { props: verificationRequestResult };
}