import { Schema, model } from 'mongoose';
import { Torder } from './order.interface';
import { product } from '../product/product.model';
import { Tproduct } from '../product/product.intreface';

const orderSchema = new Schema<Torder>({
  email: { type: String, required: true, index: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

orderSchema.pre('save', async function (next) {
  const isExist = await product.findById(this.productId);
  if (!isExist) {
    throw new Error('Order not found');
  } else if (this.quantity <= 0) {
    throw new Error("You Can't Enter 0 or Minus Value in Quantity");
  } else if (isExist.inventory.quantity < this.quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }
  next();
});

orderSchema.post('save', async function (doc, next) {
  const productData = await product.findById(doc.productId);
  const curentQuantity =
    (productData as Tproduct).inventory.quantity - doc.quantity;
  if (curentQuantity === 0) {
    await product.updateOne(
      { _id: doc.productId },
      { 'inventory.quantity': curentQuantity, 'inventory.inStock': false },
    );
  } else if (curentQuantity > 0) {
    await product.updateOne(
      { _id: doc.productId },
      { 'inventory.quantity': curentQuantity, 'inventory.inStock': true },
    );
  }

  next();
});

export const order = model('order', orderSchema);
