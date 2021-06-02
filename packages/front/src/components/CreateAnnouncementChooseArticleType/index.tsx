import { CreateAnnouncementOptionCard } from 'components/design-system/organisms/CreateAnnouncementOptionCard';
import React from 'react';
import { Formik, Form }from 'formik';
import styles from './index.module.scss';

const initialValues = {
  game: "",
  itemType: null,
  expansionTitle: "" ,
}

export const CreateAnnouncementChooseArticleType = () => {

  const submitForm = (values: any) => console.log(values);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
      >
        {
          () => (
            <Form>
              <div className={styles.container}>
                <CreateAnnouncementOptionCard itemType="standalone"/>
                <CreateAnnouncementOptionCard itemType="expansion"/>
              </div>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}