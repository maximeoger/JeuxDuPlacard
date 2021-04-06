import React from 'react';
import { PageTitle } from 'components/molecules/PageTitle';
import { PageWrapper } from 'components/styles/PageWrapper';
import { Button } from 'components/molecules/Button';
import Layout from 'components/Layout';
import LoginForm from './Form';
import styles from 'styles/pages/Login/index.module.scss';
import Link from 'next/link'

export default function LoginPage(){
  return (
    <Layout title="Jeux du Placard - Connexion">
      <PageWrapper>
        <div className={styles.pageLayout}>
          <div className={styles.loginFormContainer}>
            <PageTitle>Connexion</PageTitle>
          </div>
          <LoginForm/>
          <Link href="/retrouver-son-mot-de-passe">
            <a>
              <Button>
                J&apos ai oublié mon mot de passe
              </Button>
            </a>
          </Link>
        </div>
      </PageWrapper>
    </Layout>
  )
}


