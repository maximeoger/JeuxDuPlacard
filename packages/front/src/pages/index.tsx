import { useRouter } from 'next/router';
import Layout from 'components/Layout';
import { Heading } from 'components/design-system/atoms/Heading';
import { Button } from "components/design-system/molecules/Button";
import { AnnouncementCard } from "components/design-system/organisms/AnnouncementCard";
import { Space } from 'components/styles/Space';
import { WaveBackground } from 'components/design-system/misc/WaveBackground/index.jsx';
import useBreakpoint from "technical/utils/useBreakpoint";
import { getAnnouncements } from 'business/Announcement/services/api';
import { SearchAnnouncementBlock } from 'components/design-system/organisms/SearchAnnouncementBlock';
import styles from "./index.module.scss";

export default function Home({ announcements }) {
  const bp = useBreakpoint();
  const router = useRouter();
  
  const onButtonClick = (e) => {
    e.preventDefault();
    router.push('/créer-une-annonce');
  };
  
  return (
    <>
    <WaveBackground/>
    <Layout title="Jeux du Placard - Recyclez vos anciens jeux de sociétés !" pageWidth="auto">
      <main>
        <section className={styles.section1}>
          <SearchAnnouncementBlock/>
        </section>
        <section className={styles.section2}>
          <div className={styles.container}>
            <Space up={24}>
              <Heading priority="2" textAlign="center">Dernières annonces</Heading>
            </Space>
            <Space up={32}>
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
            </Space>
          </div>
        </section>
        {
          (bp === "mobile-large" || bp === "tablet") && (<div className={styles.placeASaleBtnContainer}>
            <Button onClick={onButtonClick}>Vendre un jeu</Button>
          </div>)
        }
      </main>
    </Layout>
    </>
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