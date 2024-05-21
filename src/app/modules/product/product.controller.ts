import { Request, Response } from 'express';
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await productService.createProductDB(data);
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
    const result = await productService.getallProductDB();
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

export const productController = { createProduct, getallProduct };
