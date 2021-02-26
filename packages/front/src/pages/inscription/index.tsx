import React from 'react';
import Link from 'next/link';
import { PageTitle } from 'components/molecules/PageTitle';
import { PageWrapper } from 'components/styles/PageWrapper';
import { Text } from 'components/atoms/Text';
import { Button } from 'components/molecules/Button';
import Layout from 'components/Layout';
import { FacebookButton } from 'components/molecules/FacebookButton';
import styles from 'styles/pages/Register/index.module.scss';

console.log(styles);

export default function RegisterPage(){
	return (
		<Layout title="Jeux du Placard - Inscription">
			<PageWrapper>
				<div className={styles.registerPageLayout}>
					<PageTitle>Inscrivez-vous sur JDP !</PageTitle>
          <div className={styles.instructionsParagraph}>
            <Text textAlign="center">
              Vendez sans frais les jeux qui trainent au fond de votre ludothèque et rejoignez une communauté de passionnés !
            </Text>
					</div>
					<div className={styles.facebookButton}>
            <FacebookButton>Continuer avec Facebook</FacebookButton>
					</div>
					<div className={styles.separator}>
            <span>ou</span>
					</div>
					<div className={styles.registerButton}>
            <Link href="/creer-un-compte">
							<a><Button variant="default">Je crée mon compte</Button></a>
						</Link>
					</div>
					<div className={styles.loginButton}>
            <Link href="/connexion"><a><Button>Je me connecte</Button></a></Link>
          </div>
				</div>
			</PageWrapper>
		</Layout>	
	)
}