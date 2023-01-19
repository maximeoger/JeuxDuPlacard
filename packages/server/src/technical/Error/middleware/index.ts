import { NextFunction, Request, Response } from 'express';
import logger from 'technical/Logger';
import BadRequestError from '../utils/badRequestError';

export default function ErrorMiddleware(error: BadRequestError, req: Request, res: Response, next: NextFunction): Response {
  logger.error({
    statusCode: error.statusCode,
    message: `${req.ip} - ${req.path} - ${error.message}`,
  });
  return res.status(error.statusCode).json({ error: error.message });
}
