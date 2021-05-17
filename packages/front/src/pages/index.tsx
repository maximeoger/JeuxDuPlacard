import Layout from 'components/Layout';
import { Display } from  'components/design-system/atoms/Display';
import { Heading } from 'components/design-system/atoms/Heading';
import { Button } from "components/design-system/molecules/Button";
import { AnnouncementCard } from "components/design-system/organisms/AnnouncementCard";
import styles from "styles/pages/Home/index.module.scss";
import useBreakpoint from "technical/utils/useBreakpoint";
import { getAnnouncements } from 'business/Announcement/services/api';
import { useModalContext, ModalTypeEnum } from 'business/Modal/state';

export default function Home({ announcements }) {
  const bp = useBreakpoint();
  const { setModal } = useModalContext();
  
  const onButtonClick = (e) => {
    e.preventDefault();
    setModal(ModalTypeEnum.CREATE_ANNOUNCEMENT)
  };
  
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