import { Tproduct } from './product.intreface';
import { product } from './product.model';

const createProductDB = async (data: Tproduct) => {
  const result = await product.create(data);
  return result;
};

const getallProductDB = async (searchTerm: string) => {
  let query = {};
  if (searchTerm) {
    query = { name: { $regex: searchTerm, $options: 'i' } };
  }
  const result = await product.find(query);
  return result;
};

const getProductByIdDB = async (id: string) => {
  const result = await product.findById(id);
  return result;
};

const updateProductDB = async (id: string, data: object) => {
  const result = await product.updateOne({ _id: id }, { $set: data });
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
