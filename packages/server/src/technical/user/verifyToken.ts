import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { getUserRepository } from '../../business/user/repository/user';
import BadRequestError from '../Error/utils/badRequestError';

export default async function verifyToken(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  const bearerHeader = req.headers.authorization;

  if (bearerHeader === undefined) {
    return res.status(400).json({ error: 'Forbidden' });
  }

  const token = bearerHeader.split(' ')[1];
  const userRepository = getUserRepository();

  try {
    const decodedToken : any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);

    const userFound = await userRepository.findOne({ where: { id: decodedToken.id } });

    req.body.user = userFound;

    return next();
  } catch (error) {
    throw new BadRequestError('Invalid token', 500);
  }
}
