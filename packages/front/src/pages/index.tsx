import Layout from 'components/Layout';
import { Display } from  'components/atoms/Display';
import { Button } from "components/molecules/Button";
import styles from "styles/pages/Home/index.module.scss";

export default function Home() {
  return (
    <Layout title="Jeux du Placard - Recyclez vos anciens jeux de sociétés !">
      <main>
        <section className={styles.section1}>
          <div className={styles.container}>
            <Display>Offrez une seconde vie <br/> à vos anciens jeux</Display>
          </div>
        </section>
        <div className={styles.placeASaleBtnContainer}>
          <Button variant="default">Vendre un jeu</Button>
        </div>
      </main>
    </Layout>
  )
}
