import express, { Router, Request, Response } from 'express';
import userRouter from './business/user/routes';

const app = express();

const apiRouter = Router();
app.use('/api', apiRouter);

app.get('/test', (req: Request, res: Response) => {
  res.send('test');
});

apiRouter.use(userRouter);


export default app;