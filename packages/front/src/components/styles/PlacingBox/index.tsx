import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

type PlaceItemValues = "center";

interface IProps {
  children: React.ReactChildren | React.ReactElement;
  placeItems: PlaceItemValues;
}

export const PlacingBox = ({children, placeItems}: IProps) => {
  return (
    <div className={classNames(styles.container, {
      [styles[placeItems]]: true
    })}>
      {children}
    </div>
  )
}

