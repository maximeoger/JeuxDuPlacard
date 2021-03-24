import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

type SpacingAutorizedValues = 2|4|8|16|24|32|40|48|56|72|80|0;

interface IProps { 
  up?: SpacingAutorizedValues;
  right?: SpacingAutorizedValues;
  bottom?: SpacingAutorizedValues;
  left?: SpacingAutorizedValues;
  children: React.ReactNode;
}


export const Space = ({ up = 0, right = 0, bottom = 0, left = 0, children }: IProps) => {
  return (
    <div className={classNames(
      {
        [styles[`up_${up}`]]: up > 0,
        [styles[`right_${right}`]]: right > 0,
        [styles[`bottom_${bottom}`]]: bottom > 0,
        [styles[`left_${left}`]]: left > 0,
      }
    )}>
      {children}
    </div>
  )
}