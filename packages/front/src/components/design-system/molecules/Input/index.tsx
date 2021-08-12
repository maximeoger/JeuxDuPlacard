import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './index.module.scss';

enum InputTypes {
  text = "text",
  email = "email",
  hidden = "hidden",
  password = "password",
}

interface IProps {
  type?: keyof typeof InputTypes;
  name: string;
  placeholder?: string;
  icon?: React.ReactNode;
  onIconClick?: () => void;
}

export const Input = ({ type, name, placeholder, icon, onIconClick }: IProps) => {
  return (
    <div className={styles.field}>
      <div className={styles.inputWrapper}>
        { icon ?
          (<button 
            className={styles.iconButton}
            onClick={onIconClick}
          >
            {icon}
          </button>) : null}
        <Field type={type} name={name} placeholder={placeholder} className={styles.input}/>
      </div>
      <ErrorMessage name={name} component="div" className={styles.error}/> 
    </div>
  )
}

