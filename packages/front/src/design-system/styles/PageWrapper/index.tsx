import React from 'react';
import styles from './index.module.scss';

interface IProps {
  children: React.ReactNode;
}

export function PageWrapper ({children}: IProps) {
  return (
    <div className={styles.pageWrapper}>{children}</div>
  )
}

