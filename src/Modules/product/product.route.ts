import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.get("/", ProductController.getProducts);
router.get("/:productId", ProductController.getProductById);
router.post("/", ProductController.createProduct);
router.put("/:productId", ProductController.updateProductInfo);
router.delete("/:productId", ProductController.deleteProduct);

export const ProductRoutes = router;
