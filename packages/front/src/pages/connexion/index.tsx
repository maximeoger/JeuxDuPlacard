import React from 'react';
import { PageTitle } from 'design-system/molecules/PageTitle';
import { PageWrapper } from 'design-system/styles/PageWrapper';
import LoginForm from './Form';
import styles from 'styles/pages/Login/index.module.scss';
import Link from 'next/link'

export default function LoginPage(){
  return (
    <PageWrapper>
      <div className={styles.pageLayout}>
        <div className={styles.loginFormContainer}>
          <PageTitle>Bienvenue !</PageTitle>
        </div>
        <LoginForm/>
        <Link href="/inscription">
          <a>Créer mon compte</a>
        </Link>
      </div>
    </PageWrapper>
  )
}

