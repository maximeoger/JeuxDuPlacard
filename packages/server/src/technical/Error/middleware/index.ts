import { Request, Response, NextFunction } from 'express';
import BadRequestError from '../utils/badRequestError';

export default function (error: BadRequestError, req: Request, res: Response, next: NextFunction) {
  return res.status(error.statusCode).json({ error: error.message });
}
