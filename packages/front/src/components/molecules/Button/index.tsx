import React from 'react';
import classNames from 'classnames';
import styles from 'styles/organisms/Button/index.module.scss';

interface IProps { 
  type?: "submit";
  children: React.ReactNode;
  variant?: "default" | "facebook" ;
  size?: "default" | "small";
}

export const Button = ({type, children, variant, size}: IProps) => (
  <div 
    className={
      classNames(styles.container, {
        [styles.variantDefault]: variant === "default",
        [styles.variantFacebook]: variant === "facebook",
        [styles.sizeSmall]: size === "small",
      })
    }
  >
    <button className={styles.button} type={type}>{children}</button>
  </div>
)
