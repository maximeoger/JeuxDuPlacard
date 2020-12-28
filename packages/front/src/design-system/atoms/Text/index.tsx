import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

interface IProps {
  children: React.ReactNode;
  style?: "page-title";
}

export const Text = ({children, style}: IProps) => (
  <p 
    className={
      classNames(styles, {
        ['page-title']: style === "page-title",
      })
    }
  >{children}</p>
);
