import jwt from 'jsonwebtoken';

export const generateToken = async (data: any) : Promise<string> => {

  const tokenSecret: string = process.env.ACCESS_TOKEN_SECRET!

  return await jwt.sign({...data}, tokenSecret, {
    algorithm: "HS256",
  })
};
