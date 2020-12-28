import React from 'react';
import LoginPage from 'design-system/pages/Login';
import { Text } from 'design-system/atoms/Text';
import styles from './index.module.scss';
import "./reset.scss";
import "./fonts.scss";

function App() {
  return (
    <div className="container">
      <LoginPage/>
  </div>
  );
}

export default App;
