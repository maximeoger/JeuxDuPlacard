import React from 'react';
import Router from 'business/Router';
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
        </div>
      </UserProvider>
    </ErrorProvider>
  );
}

export default App;
