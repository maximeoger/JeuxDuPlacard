import React from 'react';
import { PageTitle } from 'design-system/molecules/PageTitle';
import { PageWrapper } from 'design-system/styles/PageWrapper';
import RegisterForm from 'business/User/pages/Register/Form';
import styles from './index.module.scss';

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