import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userRouter from './business/user/routes';
import emailVerificationRouter from './business/email_verification/routes';
import cors from './technical/cors';
import ErrorMiddleware from './technical/Error/middleware';

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

app.get('/test', (req: Request, res: Response) => {
  res.send('[GET] test');
});

app.post('/test', (req: Request, res: Response) => {
  res.send('[POST] test');
});

apiRouter.use(userRouter);
apiRouter.use(emailVerificationRouter);
app.use(ErrorMiddleware);

export default app;
