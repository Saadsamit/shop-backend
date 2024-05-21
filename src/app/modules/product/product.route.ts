import express from 'express';
import { productController } from './product.controller';

const route = express.Router();

route.post('/', productController.createProduct);

route.get('/', productController.getallProduct);

route.get('/:productId', productController.getProductById);

route.put('/:productId', productController.updateProduct);

route.delete('/:productId', productController.deleteProduct);

export const productRoute = route;
