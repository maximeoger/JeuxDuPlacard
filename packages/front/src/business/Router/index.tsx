import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FrontRoutes from 'technical/routes';
import LoginPage from 'business/User/pages/Login';
import RegisterPage from 'business/User/pages/Register';

const Router = () => {
  return (
    <BrowserRouter>

      <Route path={FrontRoutes.login}>
        <LoginPage/>
      </Route>

      <Route path={FrontRoutes.register}>
        <RegisterPage/>
      </Route>

    </BrowserRouter>
  )
}

export default Router;