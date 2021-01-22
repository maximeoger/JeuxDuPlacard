import express, { Router, Request, Response } from 'express';
import userRouter from './business/user/routes';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from './technical/cors';

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
  console.log(req.body);
  res.send('[POST] test');
});

apiRouter.use(userRouter);


export default app;