import express, { Router, Request, Response } from 'express';
import dotenv from 'dotenv';
import { auth, ConfigParams } from 'express-openid-connect';
import sgMail from '@sendgrid/mail';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import BadRequestError from 'technical/Error/utils/badRequestError';
import loggerMiddleware from 'technical/Logger/middleware';
import announcementRouter from './business/announcement/routes';
import userRouter from './business/user/routes';
import emailVerificationRouter from './business/email_verification/routes';
import cors from './technical/cors';
import ErrorMiddleware from './technical/Error/middleware';

dotenv.config();

/**
 * ---------
 * Express definition and middleware options
 * ---------
 */
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);
app.use(cookieParser());
app.use(loggerMiddleware);

/**
 * ---------
 * Routes
 * ---------
 */
const apiRouter = Router();
app.use('/api', apiRouter);

/**
 * ---------
 * Test Routes
 * ---------
 */
app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenue sur l\'api JeuxDuPlacard');
});

apiRouter.use(userRouter);
apiRouter.use(emailVerificationRouter);
apiRouter.use(announcementRouter);

// this one have to be defined last
app.use(ErrorMiddleware);

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export default app;
