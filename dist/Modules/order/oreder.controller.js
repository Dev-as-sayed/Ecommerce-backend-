"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const result = yield order_service_1.orderService.getOrdersIntoDB(email);
        res.status(200).json({
            status: true,
            message: "Order fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: "Order not found",
            data: error,
        });
    }
});
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_service_1.orderService.createOrderIntoDB(orderData);
        res.status(200).json({
            status: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: "Samting went worng",
            data: error,
        });
    }
});
exports.OrderController = {
    createOrder,
    getOrders,
};
