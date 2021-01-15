import React from 'react';
import styles from './index.module.scss';
import classname from 'classnames';

interface IProps { 
  type?: "submit";
  children: React.ReactNode;
}

export function Button({type, children}: IProps){
  return (
    <button className={styles.button} type={type}>{children}</button>
  )
}