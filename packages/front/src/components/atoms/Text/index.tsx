import React from 'react';
import classNames from 'classnames';
import styles from 'styles/atoms/Text/index.module.scss';

export type textAlign = "left" | "center" | "right";

interface IProps {
  children: React.ReactNode;
  style?: "page-title" | "link" | "error";
  textAlign?: textAlign;
}

export const Text = ({children, style, textAlign = "left"}: IProps) => (
  <p
    className={
      classNames(styles.text, {
        [styles.pageTitle]: style === "page-title",
        [styles.link]: style === "link",
        [styles.left]: textAlign === "left",
        [styles.center]: textAlign === "center",
        [styles.right]: textAlign === "right",
        [styles.error]: style === "error",
      })
    }
  >{children}</p>
);
