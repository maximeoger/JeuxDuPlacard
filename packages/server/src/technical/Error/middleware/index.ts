import { NextFunction, Request, Response } from 'express';
import logger from 'technical/Logger';
import BadRequestError from '../utils/badRequestError';

export default function ErrorMiddleware(error: BadRequestError, req: Request, res: Response, next: NextFunction): Response {
  logger.error({
    statusCode: error.httpStatusCode,
    message: `${req.ip} - ${req.path} | ${error.httpStatusCode} : ${error.code}`,
  });
  return res.status(error.httpStatusCode).json({ error: error.code });
}
