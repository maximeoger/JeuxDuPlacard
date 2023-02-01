import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AuthProvider, { AuthUser } from 'technical/auth/abstract/AuthProvider';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

class FirebaseAuthProvider implements AuthProvider {
  initialize(): void {
    initializeApp(firebaseConfig);
  }

  createUser(): void {}

  async logIn(email: string, password: string): Promise<AuthUser> {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  logOut(): void {}

  sendEmailVerification(): void {}
}

export default FirebaseAuthProvider;
