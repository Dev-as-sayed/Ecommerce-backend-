import express from "express";
import { OrderController } from "./oreder.controller";

const router = express.Router();

router.get("/", OrderController.getOrders);
router.post("/", OrderController.createOrder);

export const OrderRouter = router;
