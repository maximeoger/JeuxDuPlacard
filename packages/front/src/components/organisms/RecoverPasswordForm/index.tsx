import React from 'react';
import { Formik, Form } from 'formik';
import { RecoverPassword } from 'common/src/business/user/types/recoverPassword';
import { recoverPasswordFormValidationRules } from 'common/src/business/user/validation/recoverPassord';
import validateFormValues from 'technical/form/validateFormValues';
import { Input } from 'components/molecules/Input';
import { Button } from 'components/molecules/Button';
import styles from './index.module.scss';

const initialValues = {
  email: "",
}

const RecoverPasswordForm = () => {
  const submitForm = (values: RecoverPassword) => {
    console.log(values);
  }

  return (
    <div className={styles.spacing32}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validate={
          (values: RecoverPassword) => validateFormValues(values, recoverPasswordFormValidationRules)
        }
      >
        {
          () => (
            <Form>
              <div className={styles.spacing32} >
                <Input type="email" name="email" placeholder="email"/>
              </div>
              <div className={styles.spacing32}>
                <Button type="submit" variant="default">Envoyer un email de récupération</Button>
              </div>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default RecoverPasswordForm;