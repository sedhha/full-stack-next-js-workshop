export const cookieInterceptor = (handler) => (request, response) => {
  console.log('Request = ', request.headers);
  return handler(request, response);
};
