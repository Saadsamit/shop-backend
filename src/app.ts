import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import env from './app/config';
const app: Application = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send(`server is running ${env.port}`);
});

export default app;
