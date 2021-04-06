import React from 'react';
import { PageWrapper } from 'components/styles/PageWrapper';
import { PageTitle } from 'components/molecules/PageTitle';
import { Text } from 'components/atoms/Text';
import { performEmailVerification } from 'business/EmailVerification/services/api';

type Context = { 
  params: {
    verificationId: string;
  }
};

export default function AccountVerificationPage() {
  return (
    <PageWrapper>
      <div>
        <div>
          <PageTitle>Email confirmé !</PageTitle>
        </div>
        <div>
          <Text>Votre adresse email à bien été vérifiée ! Vous pouvez maintenant vous connecter et utiliser l’ensemble des fonctionnalités du site</Text>
        </div>
      </div>
    </PageWrapper>
  )
}


export  const getServerSideProps = async (context: Context) => {

  const verificationRequestResult = await performEmailVerification(context.params.verificationId);

  return { props: verificationRequestResult };
}