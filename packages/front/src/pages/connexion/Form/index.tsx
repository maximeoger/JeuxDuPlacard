import React from 'react';
import { Formik, Form } from 'formik';
import { useUserContext } from 'business/User/state/index';
import validateFormValues from 'technical/form/validateFormValues';
import { loginFormValidationRules } from 'common/src/business/user/validation/login';
import { UserCredentials } from 'common/src/business/user/types/login';
import { Input } from 'components/design-system/molecules/Input';
import { PasswordInput } from 'components/design-system/molecules/PasswordInput';
import { Button } from 'components/design-system/molecules/Button';
import styles from 'styles/pages/Login/index.module.scss';

const initialValues = {
  login: "",
  password: ""
}

const LoginForm = () => {
  const { connectUser } = useUserContext();

  const submitForm = (values: UserCredentials) => {
    connectUser(values)
  }
  
  return (
    <div className={styles.loginFormContainer}>
      <Formik 
        initialValues={initialValues}
        onSubmit={submitForm}
        validate={
          (values: UserCredentials) => validateFormValues(values, loginFormValidationRules)
        }
      >
        {() => (
          <Form>
            <Input placeholder="email" type="email" name="login"/>
            <PasswordInput placeholder="Mot de passe" name="password"/>
            <div className={styles.submitButton}>
              <Button type="submit" variant="default">Je m&apos;identifie</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}


export default LoginForm;