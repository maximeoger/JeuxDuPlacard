import React, {createContext, useContext, useEffect, useState} from 'react';
import AxiosInstance from 'technical/request/index';


interface IErrorContext {
  message: string | null;
}

export const ErrorContext = createContext<IErrorContext>({
  message: null
});

function useErrorStateProvider() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    AxiosInstance.interceptors.response.use(undefined, (err) => {
        if(err.response.status !== 200){
          setMessage(err.response.statusText);
        }
        if(err.response.status === 200) {
          setMessage(null);
        }
        return Promise.reject(err);
      }
    )
  }, []);

  return {
    message,
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