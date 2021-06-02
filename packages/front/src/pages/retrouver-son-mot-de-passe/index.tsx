import React, { useState } from 'react';
import { PageTitle } from 'components/design-system/molecules/PageTitle';
import { useUserContext } from 'business/User/state';
import Layout from 'components/Layout';
import RecoverPasswordForm from 'components/design-system/organisms/RecoverPasswordForm';
import { Text } from 'components/design-system/atoms/Text';
import { RecoverPassword } from 'common/src/business/user/types/recoverPassword';
import { Space } from 'components/styles/Space';
import styles from './index.module.scss';

export default function RetrivePasswordPage(){
  const [ emailSent, setEmailSent ] = useState<boolean>(false);
  const { sendUserEmailForPasswordRetrieval } = useUserContext();

  const sendRecoverPasswordEmail = async (values: RecoverPassword) => {
    const data = await sendUserEmailForPasswordRetrieval(values);
    if(data){
      setEmailSent(data.recoverPasswordEmailSent);
    }
  } 

  return (
    <Layout title="Jeux du Placard - Retrouver son mot de passe">
        <section className={styles.section}>
          <div>
            <Space up={32}>
              <PageTitle>Retrouver son mot de passe</PageTitle>
            </Space>
            {
              emailSent ? (
                <>
                  <Space up={32}>
                    <Text> Un email de modification a été envoyé à l’adresse que vous avez choisi. </Text>
                    <Space up={16}>
                      <Text> Suivez les instructions de cet email et vous pourrez changer votre mot de passe. </Text>
                    </Space>
                  </Space>
                </>
              ) : (
                <>
                  <Space up={32}>
                    <Text>Merci d’entrer l’addresse email associée à votre compte. Un email vous sera envoyé afin que vous puissiez récupérer votre mot de passe.</Text>
                  </Space>
                  <RecoverPasswordForm 
                    sendRecoverPasswordEmail={sendRecoverPasswordEmail}/>
                </>
              )
            }
          </div>
      </section>
    </Layout>
  )
}

