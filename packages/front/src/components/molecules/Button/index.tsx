import React from 'react';
import classNames from 'classnames';
import styles from 'styles/organisms/Button/index.module.scss';

interface IProps { 
  type?: "submit";
  children: React.ReactNode;
  variant?: "default" | "facebook" | "flat";
  color?: "primary" | "secondary";
  size?: "default" | "small";
}

export const Button = ({type, children, variant, size, color}: IProps) => (
  <div 
    className={
      classNames(styles.container, {
        [styles.variantDefault]: variant === "default" || !variant,
        [styles.variantFacebook]: variant === "facebook",
        [styles.variantFlat]: variant === "flat",
        [styles.sizeSmall]: size === "small",
        [styles.colorPrimary]: color === "primary" || !color,
        [styles.colorSecondary]: color === "secondary",
      })
    }
  >
    <button className={styles.button} type={type}>{children}</button>
  </div>
)
