import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { UserProvider } from 'business/User/state/index';
import { ErrorProvider } from 'business/Error/state/index';
import SnackbarRoot from 'business/Snackbar';
import ModalRoot from 'business/Modal';
import { ModalProvider } from 'business/Modal/state';

function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorProvider>
      <UserProvider>
        <ModalProvider>
          <Component {...pageProps} />
          <SnackbarRoot/>
          <ModalRoot/>
        </ModalProvider>
      </UserProvider>
    </ErrorProvider>
  );
}

export default App
