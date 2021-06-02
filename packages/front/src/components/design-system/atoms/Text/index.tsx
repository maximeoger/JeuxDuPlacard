import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

export type textAlign = "left" | "center" | "right";

interface IProps {
  children: React.ReactNode;
  style?: "page-title" | "link" | "error" | "label";
  textAlign?: textAlign;
  noOverflow?: boolean;
}

export const Text = ({children, style, textAlign = "left", noOverflow}: IProps) => (
  <p
    className={
      classNames(styles.text, {
        [styles.pageTitle]: style === "page-title",
        [styles.link]: style === "link",
        [styles.left]: textAlign === "left",
        [styles.center]: textAlign === "center",
        [styles.right]: textAlign === "right",
        [styles.error]: style === "error",
        [styles.label]: style === "label",
        [styles.ellipsis]: noOverflow,
      })
    }
  >{children}</p>
);
