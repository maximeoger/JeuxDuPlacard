import React from 'react';
import { Formik, Form } from 'formik';
import validateFormValues from 'technical/form/validateFormValues';
import { loginFormValidationRules } from 'common/src/business/user/validation/login';
import { Input } from 'design-system/organisms/Input';
import { Button } from 'design-system/organisms/Button';
import styles from './index.module.scss';

type FormData = {
  login: string;
  password: string;
}

const initialValues = {
  login: "",
  password: ""
}

const LoginForm = () => {
  return (
    <div className={styles.loginFormContainer}>
      <Formik 
        initialValues={initialValues}
        onSubmit={values => alert(`Submitting: ${JSON.stringify(values)}`)}
        validate={
          (values: FormData) => validateFormValues(values, loginFormValidationRules)
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