import React from 'react';
import LoginPage from 'design-system/pages/Login';
import styles from './index.module.scss';
import { UserProvider } from 'business/User/state/index';
import "./reset.scss";
import "./fonts.scss";

function App() {
  return (
    <UserProvider>
      <div className={styles.container}>
        <LoginPage/>
      </div>
    </UserProvider>
    
  );
}

export default App;
