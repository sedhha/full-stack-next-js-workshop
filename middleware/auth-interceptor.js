import jwt from 'jsonwebtoken';
export const authInterceptor = (handler) => (request, response) => {
  if (
    !request.headers.authorization ||
    !request.headers.authorization?.includes('Bearer ')
  )
    return response.json({ authenticated: false });

  const verification = verifyToken(request.headers.authorization.split(' ')[1]);

  if (verification.verified)
    request.creds = {
      username: verification.username,
      password: verification.password,
    };
  else return response.json({ authenticated: false });

  return handler(request, response);
};

const verifyToken = (tokenString) => {
  try {
    const result = jwt.verify(
      tokenString,
      process.env.SUPER_SECRET_KEY ?? 'Ahh-Common'
    );
    return {
      verified: true,
      username: result.username,
      password: result.password,
    };
  } catch (error) {
    return { verified: false };
  }
};
