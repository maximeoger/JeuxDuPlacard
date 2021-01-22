import jwt from 'jsonwebtoken';

export const TOKEN_MAX_AGE = 3 * 24 * 60 * 60;

export const generateToken = async (data: any) : Promise<string> => {
  const tokenSecret: string = process.env.ACCESS_TOKEN_SECRET!
  return await jwt.sign({...data}, tokenSecret, {
    algorithm: "HS256",
    expiresIn: TOKEN_MAX_AGE
  });
};
