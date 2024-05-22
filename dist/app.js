"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./Modules/product/product.route");
const order_route_1 = require("./Modules/order/order.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// =========== ROUTERS ============= //
// Product Router
app.use("/api/products", product_route_1.ProductRoutes);
// Order Router
app.use("/api/orders", order_route_1.OrderRouter);
app.use((req, res, next) => {
    res.status(404).json({ success: false, message: "Route not found" });
    next();
});
app.get("/", (req, res) => {
    res.send("Hello Next Level Developer!");
});
exports.default = app;
