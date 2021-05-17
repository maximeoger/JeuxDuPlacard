import React, { useState } from 'react';
import classname from 'classnames';
import { Eye } from 'components/design-system/icons/Eye';
import { Input } from '../Input';
import styles from 'styles/molecules/PasswordInput/index.module.scss';

interface IProps {
  placeholder?: string;
  name: string;
}

export const PasswordInput = ({placeholder, name}: IProps) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handleClickOnIcon = () => setPasswordVisible(!passwordVisible);

  return (
    <div className={classname('Field', styles.inputWrapper)}>
      <Input 
        name={name} 
        onIconClick={handleClickOnIcon} 
        type={passwordVisible ? "text" : "password"} 
        placeholder={placeholder}
        icon={<Eye color="#6e7dab"/>}
      />
    </div>
  )
};