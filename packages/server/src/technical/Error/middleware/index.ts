import { Request, Response } from 'express';
import BadRequestError from '../utils/badRequestError';

export default function ErrorMiddleware(error: BadRequestError, req: Request, res: Response): Response {
  return res.status(error.statusCode).json({ error: error.message });
}
