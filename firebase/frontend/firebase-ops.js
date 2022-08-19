import { signInWithEmailAndPassword } from 'firebase/auth';
import Client from '../client';

export const signInUserAndObtainIDToken = async (email, password) =>
  signInWithEmailAndPassword(Client.auth, email, password)
    .then(({ user }) =>
      user
        .getIdToken()
        .then((token) => ({ error: false, token }))
        .catch((error) => ({ error: true, message: error.message }))
    )
    .catch((error) => ({ error: true, message: error.message }));
