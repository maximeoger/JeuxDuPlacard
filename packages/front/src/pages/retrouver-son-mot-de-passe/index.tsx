import React from 'react';
import { PageTitle } from 'components/molecules/PageTitle';
import { PageWrapper } from 'components/styles/PageWrapper';
import Layout from 'components/Layout';
import styles from 'styles/pages/Login/index.module.scss';
import Link from 'next/link'

export default function LoginPage(){
  return (
    <Layout title="Jeux du Placard - Connexion">
      <PageWrapper>
        <div className={styles.pageLayout}>
          <PageTitle>Retrouver son mot de passe</PageTitle>
        </div>
      </PageWrapper>
    </Layout>
  )
}

