import React from 'react';
import classnames from 'classnames';
import { Text } from 'components/design-system/atoms/Text';
import styles from 'styles/organisms/Snackbar/index.module.scss';

interface IProps {
  message: string;
  type: "error";
}

export function Snackbar({message, type}: IProps) {
  return (
    <div className={classnames(styles.snackBar, {
      [styles.error]: type === "error",
    })}>
      <Text style="error">{message}</Text>
    </div>
  )
}