"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = __importDefault(require("express"));
const oreder_controller_1 = require("./oreder.controller");
const router = express_1.default.Router();
router.get("/", oreder_controller_1.OrderController.getOrders);
router.post("/", oreder_controller_1.OrderController.createOrder);
exports.OrderRouter = router;
