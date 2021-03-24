import Layout from 'components/Layout';
import { Button } from "components/molecules/Button";
import { Text } from "components/atoms/Text";
import { PageTitle } from "components/molecules/PageTitle";
import { Space } from "components/styles/Space";
import styles from "styles/pages/AccountCreated/index.module.scss";

export default function Home() {
  return (
    <Layout title="Jeux du Placard - Confirmation de création de compte">
      <section className={styles.section}>
        <div className={styles.container}>
          <PageTitle>Votre compte a bien été créé</PageTitle>
          <Space up={32}>
            <Text>Pour commencer à utiliser les fonctionnalités du site, veuillez confirmer votre email en cliquant sur le lien que vous vennez de recevoir à l’addresse que vous avez choisi !</Text>
          </Space>
          <Space up={56}>
            <Text>Si vous n’avez rien reçu, cliquez sur le lien çi dessous pour renvoyer un email de confirmation.</Text>
          </Space>
          <Space up={16}>
            <Button>Renvoyer l'email de confirmation</Button>
          </Space>
        </div>
      </section>
    </Layout>
  )
}
