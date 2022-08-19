import { authInterceptor } from '../../middleware/auth-interceptor';

const handler = (req, res) => {
  return res.json({ authenticated: true, payload: req.creds });
};

export default authInterceptor(handler);
