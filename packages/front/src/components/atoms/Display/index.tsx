import React from 'react';
import styles from 'styles/atoms/Display/index.module.scss';

interface IProps { 
  children: React.ReactNode;
}

export const Display = ({children}: IProps) => (
  <span className={styles.display}>{children}</span>
);