import { ProductModel } from "../product/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const getOrdersIntoDB = async (quary: string) => {
  let result;
  if (quary) {
    result = await OrderModel.find({ email: { $eq: quary } });
  } else {
    result = await OrderModel.find();
  }
  return result;
};

const createOrderIntoDB = async (orderData: TOrder) => {
  const result = await OrderModel.create(orderData);
  return result;
};

export const orderService = {
  createOrderIntoDB,
  getOrdersIntoDB,
};
