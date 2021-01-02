import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useUserContext } from 'business/User/state/index';
import validateFormValues from 'technical/form/validateFormValues';
import { loginFormValidationRules } from 'common/src/business/user/validation/login';
import { UserCredentials } from 'common/src/business/user/index';
import { Input } from 'design-system/organisms/Input';
import { Button } from 'design-system/organisms/Button';
import styles from './index.module.scss';


const initialValues = {
  login: "",
  password: ""
}

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  let { connectUser } = useUserContext();


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
            <Input type="email" name="login" placeholder="ex: toto@gmail.com"/>
            <Input type="password" name="password"/>

            <Button type="submit">
              Me connecter
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}


export default LoginForm;