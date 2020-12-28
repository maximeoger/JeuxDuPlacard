import React from 'react';
import { PageTitle } from 'design-system/molecules/PageTitle';
import { PageWrapper } from 'design-system/styles/PageWrapper';
import LoginForm from 'business/Login/form';

export default function LoginPage(){
  return (
    <PageWrapper>
      <PageTitle>Bienvenue !</PageTitle>
      <LoginForm/>
    </PageWrapper>
  )
}

