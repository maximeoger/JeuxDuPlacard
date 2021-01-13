import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from 'business/User/state/index';
import FrontRoutes from '../index';

interface IPrivateRouteProps {
  path: FrontRoutes;
  children: React.ReactChild;
}

export const PrivateRoute = ({path}: IPrivateRouteProps) => {
  const { userIsLoggedIn } = useUserContext();
  return userIsLoggedIn ? <Route path={path}/> : <Redirect to={FrontRoutes.login}/>;
}