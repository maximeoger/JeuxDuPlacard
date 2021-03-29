import {
  RequestHandler, Request, Response, NextFunction,
} from 'express';
import validate from 'validate.js';

export function validationHandler<T>(constraints: T) {
  const requestHandler: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validationError : boolean = validate(req.body, constraints);
      if (validationError) {
        throw new Error('Invalid JSON');
      }
      next();
    } catch (error) {
      next(error);
    }
  };
  return requestHandler;
}
