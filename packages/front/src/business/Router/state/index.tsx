import React, {useMemo, createContext, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from 'business/User/state';
import FrontRoutes from 'technical/routes/index';


export const RouterContext = createContext(null);

function useRouterContextProvider() {
  const { userIsLoggedIn } = useUserContext();
  const history = useHistory();

  useMemo (() => {
    if(userIsLoggedIn) {
      history.push(FrontRoutes.home);
    }
  }, [userIsLoggedIn])

  return null
};

export const RouterProvider: React.FC = ({children}) => {
  const value = useRouterContextProvider();

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  )
}

export const useRouterContext = () => useContext(RouterContext);