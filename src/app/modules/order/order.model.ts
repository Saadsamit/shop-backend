import { Schema, model } from 'mongoose';
import { Torder } from './order.interface';

const orderSchema = new Schema<Torder>({
  email: String,
  productId: String,
  price: Number,
  quantity: Number,
});

export const order = model('order', orderSchema);
