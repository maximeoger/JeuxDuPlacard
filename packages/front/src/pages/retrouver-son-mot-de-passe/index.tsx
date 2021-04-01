import React, { useState } from 'react';
import { PageTitle } from 'components/molecules/PageTitle';
import { PageWrapper } from 'components/styles/PageWrapper';
import { useUserContext } from 'business/User/state';
import Layout from 'components/Layout';
import RecoverPasswordForm from 'components/organisms/RecoverPasswordForm';
import { Text } from 'components/atoms/Text';
import styles from 'styles/pages/RecoverPassword/index.module.scss';
import { RecoverPassword } from 'common/src/business/user/types/recoverPassword';
import { IUserRecoverPasswordResponse } from 'common/src/business/user';

export default function RetrivePasswordPage(){
  const [ emailSent, setEmailSent ] = useState<boolean>(false);
  const { sendUserEmailForPasswordRetrieval } = useUserContext();

  const sendRecoverPasswordEmail = async (values: RecoverPassword) => {
    let data = await sendUserEmailForPasswordRetrieval(values);
    if(data){
      setEmailSent(data.recoverPasswordEmailSent);
    }
  } 

  return (
    <Layout title="Jeux du Placard - Retrouver son mot de passe">
      <PageWrapper>
        <div className={styles.recoverPasswordPageLayout}>
          <div className={styles.spacing32}>
            <PageTitle>Retrouver son mot de passe</PageTitle>
          </div>
          {
            emailSent ? (
              <>
                <div className={styles.spacing32}>
                  <Text> Un email de modification a été envoyé à l’adresse que vous avez choisi. </Text>
                  <Text> Suivez les instructions de cet email et vous pourrez changer votre mot de passe. </Text>
                </div>
              </>
            ) : (
              <>
                <div className={styles.spacing32}>
                  <Text>Merci d’entrer l’addresse email associée à votre compte. Un email vous sera envoyé afin que vous puissiez récupérer votre mot de passe.</Text>
                </div>
                <RecoverPasswordForm 
                  sendRecoverPasswordEmail={sendRecoverPasswordEmail}/>
              </>
            )
          }
        </div>
      </PageWrapper>
    </Layout>
  )
}

