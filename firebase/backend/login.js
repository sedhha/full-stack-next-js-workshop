import Firebase from '../server';

export const verifyIDToken = async (idToken) => {
  return Firebase.auth
    .verifyIdToken(idToken)
    .then((user) => {
      error: false, user;
    })
    .catch((error) => ({ error: true, message: error.message }));
};
