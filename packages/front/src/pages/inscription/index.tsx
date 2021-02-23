import React from 'react';
import { PageTitle } from 'design-system/molecules/PageTitle';
import { PageWrapper } from 'design-system/styles/PageWrapper';
import RegisterForm from './Form';
import styles from 'styles/pages/Register/index.module.scss';

export default function RegisterPage(){
	return (
		<PageWrapper>
			<div className={styles.registerPageLayout}>
				<div className={styles.pageTitle}>
					<PageTitle>Créer un compte</PageTitle>
				</div>
				<RegisterForm/>
			</div>
		</PageWrapper>
	)
}