import rateLimit from 'express-rate-limit';
const env = process.env.NODE_ENV || 'dev';
const rateLimitRequest = Number(process.env.RATE_LIMIT_TIME) || 3000;
const rateLimitTime = Number(process.env.RATE_LIMIT_REQUEST) || 100;

let rateLimitMessage = {
  errCode: 1067,
  message: 'Failed to process your request', //Status.SERVER_ERROR.rate_limit_reached
};

export default () => {
  if (env === 'production') {
    return rateLimit({
      windowMs: rateLimitTime * 60 * 1000, // 15 minutes
      max: rateLimitRequest, // limit each IP to 3000 requests per windowMs
      message: rateLimitMessage,
    });
  }
  return rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3000, // limit each IP to 3000 requests per windowMs
    message: rateLimitMessage,
  });
};
