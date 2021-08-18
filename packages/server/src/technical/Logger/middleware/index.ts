import { Request, Response, NextFunction } from 'express';
import logger from '../index';

export default function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  logger.info({
    message: `${req.ip} - ${req.path}`,
  });
  next();
}
