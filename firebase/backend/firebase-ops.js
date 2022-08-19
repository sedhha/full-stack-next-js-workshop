import Firebase from '../server';

export const verifyIDToken = async (idToken) => {
  return Firebase.auth
    .verifyIdToken(idToken)
    .then((user) => ({
      error: false,
      user,
    }))
    .catch((error) => ({ error: true, message: error.message }));
};

export const signUpNewUser = async (email, password) => {
  return Firebase.auth
    .createUser({ email, password })
    .then((user) => ({
      error: false,
      user,
    }))
    .catch((error) => ({ error: true, message: error.message }));
};
