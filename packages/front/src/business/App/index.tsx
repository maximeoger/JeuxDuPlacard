import React from 'react';
import Router from 'business/Router';
import SnackbarRoot from 'business/Snackbar';
import styles from './index.module.scss';
import { UserProvider } from 'business/User/state/index';
import { ErrorProvider } from 'business/Error/state/index';

import "./reset.scss";
import "./fonts.scss";

function App() {
  return (
    <ErrorProvider>
      <UserProvider>
        <div className={styles.container}>
          <Router/>
          <SnackbarRoot/>
        </div>
      </UserProvider>
    </ErrorProvider>
  );
}

export default App;
