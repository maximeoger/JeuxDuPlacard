import cors, { CorsOptions } from 'cors';

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
  origin: process.env.ORIGIN_URL,
};

export default cors(crossOriginOptions);
