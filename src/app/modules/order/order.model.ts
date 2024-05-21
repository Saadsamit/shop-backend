import { Schema, model } from 'mongoose';
import { Torder } from './order.interface';

const orderSchema = new Schema<Torder>({
  email: { type: String, required: true, index: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const order = model('order', orderSchema);
