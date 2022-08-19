import { cookieInterceptor } from '../../middleware/cookie-interceptor';

const handler = (req, res) => {
  return res.status(200).json({ name: 'John Doe' });
};

export default cookieInterceptor(handler);
