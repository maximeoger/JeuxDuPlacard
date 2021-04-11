import React from 'react';
import { PageTitle } from 'components/molecules/PageTitle';
import { PageWrapper } from 'components/styles/PageWrapper';
import { Button } from 'components/molecules/Button';
import { Space } from 'components/styles/Space';
import Layout from 'components/Layout';
import LoginForm from './Form';
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
                  J&apos ai oublié mon mot de passe
                </Button>
              </a>
            </Link>
          </Space>

      </PageWrapper>
    </Layout>
  )
}


