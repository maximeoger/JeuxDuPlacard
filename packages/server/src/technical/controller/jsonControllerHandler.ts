import {
  RequestHandler, Request, Response, NextFunction,
} from 'express';
import ControllerInterface from './controllerInterface';

export function jsonRequestHandler(controller: ControllerInterface) {
  const requestHandler: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await controller(req, res);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };
  return requestHandler;
}
