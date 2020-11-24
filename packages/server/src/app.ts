import express, { Router, Request, Response } from 'express';
import userRouter from './business/user/routes';
import bodyParser from 'body-parser';

/**
 * ---------
 * Express definition and middleware options
 * ---------
 */

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

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