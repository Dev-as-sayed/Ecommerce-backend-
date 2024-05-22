import express from "express";
import cors from "cors";
import { ProductRoutes } from "./Modules/product/product.route";
import { OrderRouter } from "./Modules/order/order.route";
const app = express();

app.use(express.json());
app.use(cors());

// =========== ROUTERS ============= //

// Product Router
app.use("/api/products", ProductRoutes);

// Order Router
app.use("/api/orders", OrderRouter);

app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Route not found" });

  next();
});

app.get("/", (req, res) => {
  res.send("Hello Next Level Developer!");
});

export default app;
