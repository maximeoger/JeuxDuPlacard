import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './index.module.scss';

enum InputTypes {
  text = "text",
  password = "password",
  email = "email",
  hidden = "hidden",
}

interface IProps {
  type?: keyof typeof InputTypes;
  name: string;
  placeholder?: string;
}

export const Input = ({ type, name, placeholder }: IProps) => {
  return (
    <div className={styles.inputWrapper}>
      <Field type={type} name={name} placeholder={placeholder} className={styles.input}/>
      <ErrorMessage name={name} component="div" className={styles.error}/> 
    </div>
  )
}

