import Layout from 'components/Layout';
import { Display } from  'components/atoms/Display';
import { Heading } from 'components/atoms/Heading';
import { Button } from "components/molecules/Button";
import { AnnouncementCard } from "components/organisms/AnnouncementCard";
import styles from "styles/pages/Home/index.module.scss";
import useBreakpoint from "technical/utils/useBreakpoint";
import { getAnnouncements } from 'business/Announcement/services/api';

export default function Home({ announcements }) {
  const bp = useBreakpoint();

  
  return (
    <Layout title="Jeux du Placard - Recyclez vos anciens jeux de sociétés !">
      <main>
        <section className={styles.section1}>
          <div className={styles.container}>
            <Display>Offrez une seconde vie <br/> à vos anciens jeux</Display>
          </div>
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
            <Button>Vendre un jeu</Button>
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