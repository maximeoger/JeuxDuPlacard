import React from 'react';
import { ItemType } from 'common/src/business/item/types';
import { Heading } from 'components/design-system/atoms/Heading';
import { Space } from 'components/styles/Space';
import { Text } from 'components/design-system/atoms/Text';
import { Input } from 'components/design-system/molecules/Input';
import styles from './index.module.scss';

interface Iprops {
  itemType: ItemType;
}

export const CreateAnnouncementOptionCard = ({itemType}: Iprops) => {
  
  const isExpansion = itemType === "expansion";

  return (
    <div className={styles.container}>
      <Heading priority="3">Vendre {isExpansion ? "une Extension" : "un Jeu"}</Heading>
      <Space up={16}>
        <Text>Choisissez cette option si l&apos;article que vous souhaitez vendre est {isExpansion ? "une extension de jeu" : "une boite de base ou un standalone"}.</Text>
      </Space>
      <div>
          { 
            isExpansion ? 
            (
              <>
                <Space up={16}><Input type="text" name="game" placeholder="Titre du jeu"/></Space>
                <Input type="text" name="expansion" placeholder="Titre de l'extension"/>
              </>
            )
            :
            (
              <Space up={16}><Input type="text" name="game" placeholder="Titre du jeu"/></Space>
            )
          }
      </div>
    </div>
  )
}