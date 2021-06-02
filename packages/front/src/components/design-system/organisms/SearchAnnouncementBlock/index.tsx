import React from 'react';
import { Formik, Form } from 'formik';
import { Heading } from 'components/design-system/atoms/Heading';
import { Input } from 'components/design-system/molecules/Input';
import { Space } from 'components/styles/Space';
import styles from './index.module.scss';
import { Button } from 'components/design-system/molecules/Button';

const initialValues = {
  search: "",
  location: ""
}

export const SearchAnnouncementBlock = () => {

  const submitForm = () => {} // todo: implement behavior

  return (
    <div className={styles.block}>
      <Heading priority="1" textAlign="center">Redécouvrez d&apos;anciens classiques</Heading>
      <Space up={24}>
        <Formik
          onSubmit={submitForm}
          initialValues={initialValues}
        >
          {() => (
            <Form>
              <div className={styles.block__fieldGroup}>
                <Input 
                  placeholder="Quel jeu cherchez-vous ?" 
                  type="text" 
                  name="search"
                />
                <Input placeholder="Saisissez une ville" type="text" name="location"/>
              </div>
              <div className={styles.block__submitBtn}>
                <Button variant="flat">Rechercher</Button>
              </div>
            </Form>
          )}
        </Formik>
      </Space>
    </div>
  )
}