import express from 'express';
import { orderController } from './order.controller';

const route = express.Router();

route.post('/', orderController.newOrder);

route.get('/', orderController.getAllOrder);

export const orderRoutes = route;
