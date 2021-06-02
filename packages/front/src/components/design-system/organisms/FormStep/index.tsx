import React from 'react';
import styles from './index.module.scss';

interface IProps {
  activeStep: number,
  stepTitle: string,
  maxSteps: number,
}

export const FormStep = ({ activeStep, maxSteps, stepTitle }: IProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.step}>{activeStep} / {maxSteps}</p>
      <p className={styles.stepTitle}>{stepTitle}</p>
    </div>
  )
};