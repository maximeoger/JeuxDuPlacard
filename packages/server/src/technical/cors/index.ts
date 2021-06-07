import cors, { CorsOptions } from 'cors';

const originUrl = process.env.ORIGIN_URL || '';

const crossOriginOptions : CorsOptions = {
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
  origin: originUrl,
};

export default cors(crossOriginOptions);
