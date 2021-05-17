import Layout from 'components/Layout';
import { Button } from "components/design-system/molecules/Button";
import { Text } from "components/design-system/atoms/Text";
import { PageTitle } from "components/design-system/molecules/PageTitle";
import { Space } from "components/styles/Space";
import styles from "styles/pages/AccountCreated/index.module.scss";

export default function Home() {
  return (
    <Layout title={'Jeux du Placard - Confirmation de création de compte'}>
      <section>
        <div className={styles.container}>
          <PageTitle>Votre compte a bien été créé</PageTitle>
          <Space up={32}>
            <Text>Pour commencer à utiliser les fonctionnalités du site, veuillez confirmer votre email en cliquant sur le lien que vous vennez de recevoir à l’addresse que vous avez choisi !</Text>
          </Space>
          <Space>
            <Text>Si vous n&apos avez rien reçu, cliquez sur le lien çi dessous pour renvoyer un email de confirmation.</Text>
          </Space>
          <Space>
            <Button>Renvoyer l&apos email de confirmation</Button>
          </Space>
        </div>
      </section>
    </Layout>
  )
}
