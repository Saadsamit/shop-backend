import { Request, Response } from 'express';
import { orderValidationSchema } from './order.validation';
import { orderService } from './order.service';

const newOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const orderData = orderValidationSchema.parse(data);
    const result = await orderService.newOrderDB(orderData);
    res.status(200).send({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err:any) {
    res.status(400).send({
      success: false,
      message: err.message || 'Fail to Create Order Data!',
      data: err,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;
    const result = await orderService.getOrders(email as string);
    res.status(200).send({
      success: true,
      message: email
        ? 'Orders fetched successfully for user email!'
        : 'Orders fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: 'Fail to fetched Order Data!',
      data: err,
    });
  }
};

export const orderController = {
  newOrder,
  getAllOrder,
};
