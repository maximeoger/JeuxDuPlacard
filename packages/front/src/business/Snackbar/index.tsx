import React from 'react';
import { Snackbar } from 'design-system/organisms/Snackbar';
import { useErrorContext } from 'business/Error/state';
import { useInterval } from './services/useInterval';

export default function SnackbarRoot() {
  const { message, refreshMessage } = useErrorContext();

  useInterval(() => {
    refreshMessage();
  }, 3000);

  if(message !== null){
    return (<Snackbar message={message} type="error"/>)
  }
  return null
}