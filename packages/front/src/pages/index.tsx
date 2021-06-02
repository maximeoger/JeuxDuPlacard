import { useRouter } from 'next/router';
import Layout from 'components/Layout';
import { Heading } from 'components/design-system/atoms/Heading';
import { Button } from "components/design-system/molecules/Button";
import { AnnouncementCard } from "components/design-system/organisms/AnnouncementCard";
import styles from "./index.module.scss";
import useBreakpoint from "technical/utils/useBreakpoint";
import { getAnnouncements } from 'business/Announcement/services/api';

export default function Home({ announcements }) {
  const bp = useBreakpoint();
  const router = useRouter();
  
  const onButtonClick = (e) => {
    e.preventDefault();
    router.push('/créer-une-annonce');
  };
  
  return (
    <Layout title="Jeux du Placard - Recyclez vos anciens jeux de sociétés !">
      <main>
        <section className={styles.section1}>
          
        </section>
        <section className={styles.section2}>
          <div className={styles.container}>
            <Heading>Dernières annonces</Heading>
            <div className={styles.announcementContainer}>
              {
                announcements.data.map(announcement => (
                  <AnnouncementCard 
                    key={announcement.id}
                    user={announcement.user}
                    item={announcement.item}
                    sellingPrice={announcement.sellingPrice}
                    condition={announcement.condition}
                  />
                ))
              }
            </div>
          </div>
        </section>
        {
          (bp === "mobile-large" || bp === "tablet") && (<div className={styles.placeASaleBtnContainer}>
            <Button onClick={onButtonClick}>Vendre un jeu</Button>
          </div>)
        }
      </main>
    </Layout>
  )
}


export  const getStaticProps = async () => {

  const getAnnouncementsRequestResult = await getAnnouncements({limit: 8});

  return { 
    props: {
       announcements: getAnnouncementsRequestResult 
    }
  };
}