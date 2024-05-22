import { Request, Response } from 'express';
import { productService } from './product.service';
import productValidationSchema from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const productData = productValidationSchema.parse(data);
    const result = await productService.createProductDB(productData);
    res.status(200).send({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: 'fail to create Product!',
      data: err,
    });
  }
};

const getallProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;
    const result = await productService.getallProductDB(searchTerm as string);
    res.status(200).send({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: 'fail to fetched Product Data!',
      data: err,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.getProductByIdDB(productId);
    res.status(200).send({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: 'fail to fetched Product Data!',
      data: err,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data = req.body;
    const productData = productValidationSchema.partial().parse(data);
    const result = await productService.updateProductDB(productId, productData);
    if (result.modifiedCount === 1) {
      res.status(200).send({
        success: true,
        message: 'Product updated successfully!',
        data: result,
      });
    } else {
      res.status(400).send({
        success: false,
        message: 'The Data Does Not Exist',
        data: result,
      });
    }
  } catch (err) {
    res.status(400).send({
      success: false,
      message: 'fail to updated Product Data!',
      data: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.deleteProductDB(productId);
    if (result.deletedCount === 1) {
      res.status(200).send({
        success: true,
        message: 'Product deleted successfully!',
        data: null,
      });
    } else {
      res.status(400).send({
        success: false,
        message: 'fail to delete Product Data!',
        data: result,
      });
    }
  } catch (err) {
    res.status(400).send({
      success: false,
      message: 'fail to delete Product Data!',
      data: err,
    });
  }
};

export const productController = {
  createProduct,
  getallProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
