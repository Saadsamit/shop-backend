import express, {
  Application,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import cors from 'cors';
import env from './app/config';
import { productRoute } from './app/modules/product/product.route';
import { orderRoutes } from './app/modules/order/order.route';
const app: Application = express();

app.use(cors());
app.use(express.json());

// routes

app.use('/api/products', productRoute);

app.use('/api/orders', orderRoutes);

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

// global error handler

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong',
    });
  }
});

export default app;
