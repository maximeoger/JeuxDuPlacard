import React from 'react';
import Link from 'next/link';
import { PageTitle } from 'components/molecules/PageTitle';
import { Text } from 'components/atoms/Text';
import { Button } from 'components/molecules/Button';
import Layout from 'components/Layout';
import { Space } from 'components/styles/Space';
import { FacebookButton } from 'components/molecules/FacebookButton';
import styles from 'styles/pages/Register/index.module.scss';

export default function RegisterPage(){
	return (
		<Layout title="Jeux du Placard - Inscription">
				<section className={styles.section}>
					<div>
						<PageTitle>Inscrivez-vous sur JDP !</PageTitle>

						<Space up={80}>
							<Text textAlign="center">
								Vendez sans frais les jeux qui trainent au fond de votre ludothèque et rejoignez une communauté de passionnés !
							</Text>
						</Space>

						<Space up={32}>
							<FacebookButton>Continuer avec Facebook</FacebookButton>
						</Space>

						<Space up={24} bottom={24}>
							<span>ou</span>
						</Space>

						<Link href="/creer-un-compte">
							<a><Button>Je crée mon compte</Button></a>
						</Link>

						<Space up={24}>
							<Link href="/connexion"><a><Button variant="link">Je me connecte</Button></a></Link>
						</Space>
					</div>
				</section>
		</Layout>	
	)
}