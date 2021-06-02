import React from 'react';
import styles from 'styles/atoms/Heading/index.module.scss';
import classnames from 'classnames';

interface IProps { 
  children: React.ReactNode;
  priority?: "1" | "2" | "3" | "4" | "5" | "6"
}

export const Heading = ({children, priority="1"}: IProps) => {
  
  const HeadingType = `h${priority}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingType className={
      classnames({
        [styles.h1]: priority === "1",
        [styles.h2]: priority === "2",
        [styles.h3]: priority === "3",
        [styles.h4]: priority === "4",
        [styles.h5]: priority === "5",
        [styles.h6]: priority === "6"
      })
    }>{children}</HeadingType>
  )
};