import cors, { CorsOptions } from 'cors';

const originUrl = process.env.ORIGIN_URL || '';

let crossOriginOptions : CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'Authorization',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
};

if (process.env.NODE_ENV === 'production') {
  // specify a custom origin for production environment
  crossOriginOptions = { ...crossOriginOptions, origin: originUrl };
}

export default cors(crossOriginOptions);
