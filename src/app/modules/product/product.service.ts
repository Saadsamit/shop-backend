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

const getProductByIdDB = async (id: string) => {
  const result = await product.findById(id);
  return result;
};

const updateProductDB = async (id: string, data: object) => {
  const result = await product.updateOne({ _id: id }, data);
  return result;
};

const deleteProductDB = async (id: string) => {
  const result = await product.deleteOne({ _id: id });
  return result;
};

export const productService = {
  createProductDB,
  getallProductDB,
  getProductByIdDB,
  updateProductDB,
  deleteProductDB,
};
