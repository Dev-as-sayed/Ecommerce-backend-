"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.get("/", product_controller_1.ProductController.getProducts);
router.get("/:productId", product_controller_1.ProductController.getProductById);
router.post("/", product_controller_1.ProductController.createProduct);
router.put("/:productId", product_controller_1.ProductController.updateProductInfo);
router.delete("/:productId", product_controller_1.ProductController.deleteProduct);
exports.ProductRoutes = router;
