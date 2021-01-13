import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from 'business/User/state/index';
import FrontRoutes from '../index';

interface IPrivateRouteProps {
  path: FrontRoutes;
  children: React.ReactChild;
}

export const PrivateRoute = ({path, children}: IPrivateRouteProps) => {
  const { userIsLoggedIn } = useUserContext();
  
  if(userIsLoggedIn) {
    return (
      <Route path={path}>
        {children}
      </Route> 
    )
  }

  return (<Redirect to={FrontRoutes.login}/>);
}