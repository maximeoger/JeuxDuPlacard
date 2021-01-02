import React from 'react';
import { PageTitle } from 'design-system/molecules/PageTitle';
import { PageWrapper } from 'design-system/styles/PageWrapper';
import LoginForm from 'business/Login/form';
import styles from './index.module.scss';

export default function LoginPage(){
  return (
    <PageWrapper>
      <div className={styles.loginPageLayout}>
        <PageTitle>Bienvenue !</PageTitle>
        <LoginForm/>
      </div>
    </PageWrapper>
  )
}

