import React from 'react';
import styles from './index.module.scss';
import { Text } from 'components/design-system/atoms/Text';
import { Button } from 'components/design-system/molecules/Button';
import { Space } from 'components/styles/Space';

interface IProps {
  onButtonClick?: (string: string) => void;
  buttonText: string;
  buttonIcon?: string;
  methodDescription: string;
}

export const SearchMethodCard = ({onButtonClick, buttonText, methodDescription}: IProps) => {
  return (
    <div className={styles.searchMethodCard}>
      <div className={styles.searchMethodCard__row}>
        <div className={styles.searchMethodCard__img}></div>
        <div className={styles.searchMethodCard__text}><Text>{methodDescription}</Text></div>
      </div>
      
      <Space up={24}>
        <Button 
          size="small" 
          onClick={onButtonClick}
        >{buttonText}</Button>
      </Space>
    </div>
  )
};

