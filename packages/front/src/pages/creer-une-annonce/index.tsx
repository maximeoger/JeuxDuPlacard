import React from 'react';
import Layout from 'components/Layout';
import { Heading } from 'components/design-system/atoms/Heading';
import { Text } from 'components/design-system/atoms/Text';
import { Space } from 'components/styles/Space';
import { SearchMethodCard } from 'components/design-system/organisms/SearchMethodCard';
import styles from './index.module.scss';

export default function CreateAnnouncementPage(){
  return (
    <Layout pageWidth="medium" title="Créer une annonce">
      <Space up={72}>
        <Heading priority="1">Créer une annonce</Heading>

        <section>
          <Space up={32}>
            <Text style="label">Etape 1 - Que souhaitez-vous vendre ?</Text>
          </Space>
          <Space up={16}>
            <Text>Pour commencer, utilisez notre base de données pour retrouver le jeu que vous souhaitez vendre. Pour celà, vous pouvez utiliser l’une des deux options :</Text>
          </Space>
        </section>

        <section>
          <Space up={32}>
            <div className={styles.options}>
              <SearchMethodCard 
                onButtonClick={() => {}}
                buttonText="Scanner le code-barre"
                methodDescription="Utilisez la caméra de votre téléphone pour retrouver les informations de votre jeu à partir de son code-barre"
              />
              <SearchMethodCard 
                buttonText="Rechercher un jeu"
                methodDescription="Utilisez notre moteur de recherche pour trouver les informations du jeu que vous souhaitez vendre"
                onButtonClick={() => {}}
              />
            </div>
          </Space>
        </section>

        <section>
          <Space up={32}>
            <Text style="label">Etape 2 - Créez votre annonce</Text>
          </Space>
          <Space up={16}>
            <Text>Maintenant que le jeu est trouvé, il vous reste à choisir les conditions de vente pour votre annonce.</Text>
          </Space>
        </section>
        
      </Space>      
    </Layout>
  )
}

