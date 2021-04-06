import React from 'react';
import { Formik, Form } from 'formik';
import { useUserContext } from 'business/User/state/index';
import { UserRegisterData } from 'common/src/business/user/types/register';
import { Input } from 'components/molecules/Input';
import { Button } from 'components/molecules/Button';
import styles from 'styles/pages/Register/index.module.scss';
import validateFormValues from 'technical/form/validateFormValues';
import { registerValidationConstraints } from 'common/src/business/user/validation/register';

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  lastName: "",
  firstName: ""
}

const RegisterForm = () => {
  const { registerUser } = useUserContext();

  const submitForm = (values: UserRegisterData) => {
    registerUser(values)
  }

  return (
    <div className={styles.registerFormContainer}>
      <Formik
        onSubmit={submitForm}
        initialValues={initialValues}
        validate={
          (values: UserRegisterData) => validateFormValues(values, registerValidationConstraints)
        }
      >
        {() => (
          <Form>
            <Input type="text" name="lastName" placeholder="Nom"/>
            <Input type="text" name="firstName" placeholder="Prénom"/>
            <Input type="email" name="email" placeholder="Email"/>
            <Input type="password" name="password" placeholder="Mot de passe"/>
            <Input type="password" name="confirmPassword" placeholder="Confirmation du Mot de passe"/>
            <Button type="submit" variant="default">Créer mon compte</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm;