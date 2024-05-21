import { Torder } from './order.interface';
import { order } from './order.model';

const newOrderDB = async (data: Torder) => {
  const result = await order.create(data);
  return result;
};

const getOrders = async (email: string) => {
  if (email) {
    const result = await order.find({ email });
    return result;
  } else {
    const result = await order.find();
    return result;
  }
};

export const orderService = {
  newOrderDB,
  getOrders,
};
