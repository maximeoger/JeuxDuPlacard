import React from 'react';
import { UserName } from 'components/design-system/atoms/UserName';
import { IAnnouncementResponse } from 'common/src/business/announcement/index';
import { Text } from 'components/design-system/atoms/Text';
import useBreakpoint from "technical/utils/useBreakpoint";
import styles from './index.module.scss';

type IProps = Pick<
  IAnnouncementResponse,
  "user" | "item" | "sellingPrice" | "condition"
>;


export const AnnouncementCard = ({user, item, sellingPrice, condition}: IProps) => {
  const bp = useBreakpoint();



  return (
    <div className={styles.Announcement__container}>
      { 
        (bp === "tablet" || bp === "desktop-small" || bp === "desktop") && (
          <UserName firstName={user.firstName}/>
        )
      }
      <div className={styles.Announcement__card}>
        <div className={styles.Announcement__cardImgContainer}>
          <img src="https://images.vinted.net/thumbs/f800/02_01fab_WEEcBwKyAKkuaBv5VDCc9jbc.jpeg?1619936789-d328d07235dc8454f44a8d81ec14e57464c1f92a" alt={`${item.name}`}/>
        </div>
        <div className={styles.Announcement__infos}>
          <div className={styles.Announcement__infosRow1}>
            <Text style="label">{`${sellingPrice} €`}</Text>
            <span>7</span>
          </div>

          <Text noOverflow>
            {item.name} 
          </Text>
     
          <Text>{condition}</Text>
        </div>
      </div>
    </div>
  )
}