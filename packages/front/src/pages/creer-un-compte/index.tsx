import React from 'react';
import { PageTitle } from 'components/design-system/molecules/PageTitle';
import { Space } from 'components/styles/Space';
import Layout from 'components/Layout';
import RegisterForm from './Form';
import styles from './index.module.scss';

export default function RegisterPage(){
	return (
		<Layout title="Jeux du Placard - Créer un compte">
			<section className={styles.section}>
				<div>
					<Space up={32}>
						<PageTitle>Créer un compte</PageTitle>
					</Space>
					<RegisterForm/>
				</div>
			</section>
		</Layout>	
	)
}