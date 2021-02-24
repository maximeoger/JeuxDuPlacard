import React from 'react';
import { PageTitle } from 'components/molecules/PageTitle';
import { PageWrapper } from 'components/styles/PageWrapper';
import Layout from 'components/Layout';
import RegisterForm from './Form';
import styles from 'styles/pages/Register/index.module.scss';

export default function RegisterPage(){
	return (
		<Layout title="Jeux du Placard - Inscription">
			<PageWrapper>
				<div className={styles.registerPageLayout}>
					<div className={styles.pageTitle}>
						<PageTitle>Créer un compte</PageTitle>
					</div>
					<RegisterForm/>
				</div>
			</PageWrapper>
		</Layout>	
	)
}