import React from 'react';
import { PageTitle } from 'design-system/molecules/PageTitle';
import { PageWrapper } from 'design-system/styles/PageWrapper';
import RegisterForm from 'business/User/pages/Register/Form';
import styles from './index.module.scss';

export default function RegisterPage(){
	return (
		<PageWrapper>
			<div className={styles.registerPageLayout}>
				<PageTitle>Créer un compte</PageTitle>
				<RegisterForm/>
			</div>
		</PageWrapper>
	)
}