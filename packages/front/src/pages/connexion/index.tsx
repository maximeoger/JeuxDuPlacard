import React from 'react';
import { PageTitle } from 'components/molecules/PageTitle';
import { PageWrapper } from 'components/styles/PageWrapper';
import { Button } from 'components/molecules/Button';
import { Space } from 'components/styles/Space';
import Layout from 'components/Layout';
import LoginForm from './Form';
import styles from 'styles/pages/Login/index.module.scss';
import Link from 'next/link'

export default function LoginPage(){
  return (
    <Layout title="Jeux du Placard - Connexion">
      <PageWrapper>
         
          <PageTitle>Connexion</PageTitle>
          
          <Space up={32}>
            <LoginForm/>
          </Space>

          <Space up={32}>
            <Link href="/retrouver-son-mot-de-passe">
              <a>
                <Button variant="link">
                  J'ai oublié mon mot de passe
                </Button>
              </a>
            </Link>
          </Space>
          
          <LoginForm/>
          <Link href="/retrouver-son-mot-de-passe">
            <a>
              <Button>
                J&apos ai oublié mon mot de passe
              </Button>
            </a>
          </Link>
      </PageWrapper>
    </Layout>
  )
}


