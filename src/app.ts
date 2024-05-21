import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import env from './app/config';
import { productRoute } from './app/modules/product/product.route';
const app: Application = express();

app.use(cors());
app.use(express.json());

// routes

app.use('/api/products',productRoute)

app.get('/', (req: Request, res: Response) => {
  res.send({
    massage: `server is running ${env.port}`,
  });
});

app.all('*', (req: Request, res: Response) => {
  res.status(404).send({
    success: false,
    message: `Route not found`,
  });
});

export default app;
