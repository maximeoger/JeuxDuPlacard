import React from 'react';
import { Formik, Form } from 'formik';
//import { Link } from 'react-router-dom';
import FrontRoutes from 'technical/routes';
import { useUserContext } from 'business/User/state/index';
import validateFormValues from 'technical/form/validateFormValues';
import { loginFormValidationRules } from 'common/src/business/user/validation/login';
import { UserCredentials } from 'common/src/business/user/types/login';
import { Input } from 'design-system/organisms/Input';
import { Text } from 'design-system/atoms/Text';
import { Button } from 'design-system/organisms/Button';
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
            <Input placeholder="mot de passe" type="password" name="password"/>
            <div  className={styles.forgotPassword}>
              {/* <Link to={FrontRoutes.forgotPassword}>
                <Text style="link" textAlign="right">Mot de passe oublié ?</Text>
              </Link> */}
            </div>
            <div className={styles.submitButton}>
              <Button type="submit">Me connecter</Button>
            </div>
            <div className={styles.createAccount}>
              {/* <Link to={FrontRoutes.register}>
                <Text style="link" textAlign="center">Créer mon compte</Text>
              </Link> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}


export default LoginForm;