import Layout from 'components/Layout';
import { Button } from "components/molecules/Button";
import { Text } from "components/atoms/Text";
import { PageTitle } from "components/molecules/PageTitle";
import styles from "styles/pages/AccountCreated/index.module.scss";

export default function Home() {
  return (
    <Layout title="Jeux du Placard - Confirmation de création de compte">
      <main>
        <div className={styles.container}>
          <PageTitle>Votre compte a bien été créé</PageTitle>
          <div>
            <Text>Pour commencer à utiliser les fonctionnalités du site, veuillez confirmer votre email en cliquant sur le lien que vous vennez de recevoir à l’addresse que vous avez choisi !</Text>
          </div>
          <div>
            <Text>Si vous n’avez rien reçu, cliquez sur le lien çi dessous pour renvoyer un email de confirmation.</Text>
          </div>
          <div>
            <Button>Renvoyer l'email de confirmation</Button>
          </div>
        </div>
      </main>
    </Layout>
  )
}
