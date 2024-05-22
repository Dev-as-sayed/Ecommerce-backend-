import { Request, Response } from "express";
import { orderService } from "./order.service";

const getOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const result = await orderService.getOrdersIntoDB(email);

    res.status(200).json({
      status: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Order not found",
      data: error,
    });
  }
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await orderService.createOrderIntoDB(orderData);
    res.status(200).json({
      status: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Samting went worng",
      data: error,
    });
  }
};

export const OrderController = {
  createOrder,
  getOrders,
};
