import { Request, Response } from 'express';

type ControllerInterface<T = any> = (req: Request, res: Response) => Promise<T>;

export default ControllerInterface;
