import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useUserContext } from 'business/User/state/index';
import { UserRegisterData } from 'common/src/business/user/types/register';
import { Input } from 'design-system/organisms/Input';
import { Button } from 'design-system/organisms/Button';
import styles from './index.module.scss';
import validateFormValues from 'technical/form/validateFormValues';
import { registerValidationConstraints } from 'common/src/business/user/validation/register';

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  lastName: "",
  firstName: ""
}

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { registerUser } = useUserContext();

  const submitForm = (values: UserRegisterData) => {
    registerUser(values)
  }
  
  return (
    <div className={styles.RegisterFormContainer}>
      <Formik
        onSubmit={submitForm}
        initialValues={initialValues}
        validate={
          (values: UserRegisterData) => validateFormValues(values, registerValidationConstraints)
        }
      >
        {() => {
            <Form>
              <Input type="text" name="lastName"/>
              <Input type="text" name="firstName"/>
              <Input type="email" name="email" placeholder="ex: D.Dupondt@gmail.com"/>
              <Input type="password" name="password"/>
              <Input type="password" name="confirmPassword"/>
              <Button type="submit">Créer mon compte</Button>
            </Form>
        }}
      </Formik>
    </div>
  )
}

export default RegisterForm;