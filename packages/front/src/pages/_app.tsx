import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from 'business/User/state/index';
import { ErrorProvider } from 'business/Error/state/index';
import SnackbarRoot from 'business/Snackbar';

function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorProvider>
      <UserProvider>
        <Component {...pageProps} />
        <SnackbarRoot/>
      </UserProvider>
    </ErrorProvider>
  );
}

export default App
