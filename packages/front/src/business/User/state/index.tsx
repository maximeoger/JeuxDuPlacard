import React, {createContext, useContext, useState} from 'react';
import { IUserResponse, IUserLoginResponse ,UserCredentials } from 'common/src/business/user';
import { login } from 'business/User/state/services/api';

interface IUserContext {
  user: IUserLoginResponse | null;
  connectUser: (payload: UserCredentials) => void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  connectUser: () => {},
});

function useUserStateProvider() {
  const [user, setUser] = useState<IUserLoginResponse | null>(null);

  const connectUser = async (payload: UserCredentials) => {
    
    try{
      const loginResponseSuccess = await login(payload);
      setUser(loginResponseSuccess);
      // TODO: extract user data from base64 encoded token
    }catch(err) {
      setUser(null);
    }
  }

  return {
    user,
    connectUser
  }
}

export const UserProvider: React.FC = ({children}) => {
  const value = useUserStateProvider();

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext);