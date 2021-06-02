import React from 'react';
import styles from './index.module.scss';

export const WaveBackground = () => {
  return (
    <svg 
      className={styles.svg} 
      width="1440" 
      height="385" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      preserveAspectRatio="none"
      viewBox="0 0 1440 385"
    >
      <path d="M287.794 293.186C161.084 268.515 42.469 314.788-1 341.007V0h1440.97v328.008c1.44-.174 1.3-.142 0 .038v-.038c-9.28 1.118-84.15 10.728-338.76 43.838-367.735 47.821-655.029-47.822-813.416-78.66z" fill="#ABC4FF"/>
    </svg>
  )
}