import { Tproduct } from './product.intreface';
import { product } from './product.model';
import productValidationSchema from './product.validation';

const createProductDB = async (data: Tproduct) => {
  const productData = productValidationSchema.parse(data);
  const result = await product.create(productData);
  return result;
};

const getallProductDB = async () => {
  const result = await product.find();
  return result;
};

export const productService = {
  createProductDB,
  getallProductDB,
};
