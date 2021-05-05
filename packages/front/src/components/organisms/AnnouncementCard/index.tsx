import React from 'react';
import { UserName } from 'components/atoms/UserName';
import { IAnnouncementResponse } from 'common/src/business/announcement/index';
import { Text } from 'components/atoms/Text';
import styles from 'styles/organisms/AnnouncementCard/index.module.scss';

type IProps = Pick<
  IAnnouncementResponse,
  "user" | "item" | "sellingPrice" | "condition"
>;

export const AnnouncementCard = ({user, item, sellingPrice, condition}: IProps) => {
  return (
    <div className={styles.AnnouncementCard__container}>
      <UserName firstName={user.firstName}/>
      <div className={styles.AnnouncementCard}>
        <img src="" alt={`${item.name}`}/>
        <div>
          <div>
            <Text>{sellingPrice}</Text>
            <span>7</span>
          </div>
          <Text>{item.name}</Text>
          <Text>{condition}</Text>
        </div>
      </div>
    </div>
  )
}