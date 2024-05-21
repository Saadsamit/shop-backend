import express from 'express';
import { productController } from './product.controller';

const route = express.Router();

route.post('/', productController.createProduct);

route.get('/',productController.getallProduct)

export const productRoute = route;
