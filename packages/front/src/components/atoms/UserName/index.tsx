import React from 'react';
import styles from 'styles/atoms/UserName/index.module.scss';

interface IProps {
  firstName: string;
}

export const UserName = ({firstName}: IProps) => {
  return (
    <div className={styles.UserName}>
      <img className={styles.UserName__avatar} src="https://i.pravatar.cc/24" alt="user avatar"/>
      <span className={styles.UserName__firstName}>{firstName}</span>
    </div>
  )
}