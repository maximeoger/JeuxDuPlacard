import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PrivateRoute } from 'technical/routes/utils';
import FrontRoutes from 'technical/routes';
import LoginPage from 'business/User/pages/Login';
import RegisterPage from 'business/User/pages/Register';
import HomePage from 'business/User/pages/Home';
import { RouterProvider } from 'business/Router/state';

const Router = () => {
  return (
    <BrowserRouter>
      <RouterProvider>
        <Route path={FrontRoutes.login}>
          <LoginPage/>
        </Route>

        <Route path={FrontRoutes.register}>
          <RegisterPage/>
        </Route>

        <PrivateRoute path={FrontRoutes.home}>
          <HomePage/>
        </PrivateRoute>
      </RouterProvider>
    </BrowserRouter>
  )
}

export default Router;