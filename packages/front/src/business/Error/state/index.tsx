import React, {createContext, useContext, useEffect, useState} from 'react';
import AxiosInstance from 'technical/request/index';

interface IErrorContext {
  message: string | null;
  refreshMessage: () => void;
}

export const ErrorContext = createContext<IErrorContext>({
  message: null,
  refreshMessage: () => {},
});

function useErrorStateProvider() {
  const [message, setMessage] = useState<string | null>(null);
  

  useEffect(() => {
    AxiosInstance.interceptors.response.use(undefined, (err) => {
        if(err.response.status !== 200){
          console.time();
          setMessage(err.response.statusText);
        }
        return Promise.reject(err);
      }
    )
  }, []);

  const refreshMessage = () => {
    console.timeEnd();
    setMessage(null);
  };

  return {
    message,
    refreshMessage,
  };
}

export const ErrorProvider: React.FC = ({children}) => {
  const value = useErrorStateProvider();

  return (
    <ErrorContext.Provider value={value}>
      {children}
    </ErrorContext.Provider>
  )
}

export const useErrorContext = () => useContext(ErrorContext);