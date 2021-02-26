import React from 'react';
import { PageTitle } from 'components/molecules/PageTitle';
import { PageWrapper } from 'components/styles/PageWrapper';
import Layout from 'components/Layout';
import RecoverPasswordForm from 'components/organisms/RecoverPasswordForm';
import { Text } from 'components/atoms/Text';
import styles from 'styles/pages/RecoverPassword/index.module.scss';

export default function LoginPage(){
  return (
    <Layout title="Jeux du Placard - Connexion">
      <PageWrapper>
        <div className={styles.recoverPasswordPageLayout}>
          <div className={styles.spacing32}>
            <PageTitle>Retrouver son mot de passe</PageTitle>
          </div>
          <div className={styles.spacing32}>
            <Text>Merci d’entrer l’addresse email associée à votre compte. Un email vous sera envoyé afin que vous puissiez récupérer votre mot de passe.</Text>
          </div>
          <RecoverPasswordForm/>
        </div>
      </PageWrapper>
    </Layout>
  )
}

