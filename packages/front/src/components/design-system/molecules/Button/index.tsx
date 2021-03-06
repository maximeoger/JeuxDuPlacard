import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';


interface IProps { 
  type?: "submit";
  children: React.ReactNode;
  variant?: "default" | "facebook" | "flat" | "link";
  color?: "primary" | "secondary";
  size?: "default" | "small";
  onClick?: (any) => void;
}

export const Button = ({type, children, variant, size, color, onClick}: IProps) => (
  <div 
    className={
      classNames(styles.container, {
        [styles.variantDefault]: variant === "default" || !variant,
        [styles.variantFacebook]: variant === "facebook",
        [styles.variantFlat]: variant === "flat",
        [styles.variantLink]: variant === "link",
        [styles.sizeSmall]: size === "small",
        [styles.colorPrimary]: color === "primary" || !color,
        [styles.colorSecondary]: color === "secondary",
      })
    }
  >
    <button onClick={onClick} className={styles.button} type={type}>{children}</button>
  </div>
)
