import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import FrontRoutes from 'technical/routes';
import { useUserContext } from 'business/User/state/index';
import validateFormValues from 'technical/form/validateFormValues';
import { loginFormValidationRules } from 'common/src/business/user/validation/login';
import { UserCredentials } from 'common/src/business/user/types/login';
import { Input } from 'design-system/organisms/Input';
import { Button } from 'design-system/organisms/Button';
import styles from './index.module.scss';


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
            <Input type="email" name="login"/>
            <Input type="password" name="password"/>
            <Button type="submit">Me connecter</Button>
            <Link to={FrontRoutes.register}>
              <Button>Créer un compte</Button>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  )
}


export default LoginForm;