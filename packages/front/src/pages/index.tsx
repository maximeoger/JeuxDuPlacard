import Layout from 'components/Layout';
import { Display } from  'components/atoms/Display';
import { Button } from "components/molecules/Button";
import styles from "styles/pages/Home/index.module.scss";
import useBreakpoint from "technical/utils/useBreakpoint";

export default function Home() {
  const bp = useBreakpoint();

  
  return (
    <Layout title="Jeux du Placard - Recyclez vos anciens jeux de sociétés !">
      <main>
        <section className={styles.section1}>
          <div className={styles.container}>
            <Display>Offrez une seconde vie <br/> à vos anciens jeux</Display>
          </div>
        </section>
        {
          (bp === "mobile-large" || bp === "tablet") && (<div className={styles.placeASaleBtnContainer}>
            <Button>Vendre un jeu</Button>
          </div>)
        }
      </main>
    </Layout>
  )
}
