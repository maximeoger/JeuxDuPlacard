import { Request, Response } from 'express';

type controllerInterface<T = any> = (req: Request, res: Response) => Promise<T>;

export default controllerInterface;
