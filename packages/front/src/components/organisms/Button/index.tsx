import React from 'react';
import styles from 'styles/organisms/Button/index.module.scss';
import classname from 'classnames';

interface IProps { 
  type?: "submit";
  children: React.ReactNode;
}

export function Button({type, children}: IProps){
  return (
    <div className={styles.container}>
      <button className={styles.button} type={type}>{children}</button>
    </div>
  )
}