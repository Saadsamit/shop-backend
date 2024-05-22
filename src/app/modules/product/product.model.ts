import { Schema, model } from 'mongoose';
import { Tinventory, Tproduct, Tvariants } from './product.intreface';

const variants = new Schema<Tvariants>(
  {
    type: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false },
);

const inventory = new Schema<Tinventory>(
  {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { _id: false },
);

const productSchema = new Schema<Tproduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variants], required: true },
  inventory: { type: inventory, required: true },
});

// Middleware
productSchema.pre('save', function (next) {
  if (this.inventory.quantity < 1) {
    this.inventory.inStock = false;
  }
  next();
});

export const product = model<Tproduct>('product', productSchema);
