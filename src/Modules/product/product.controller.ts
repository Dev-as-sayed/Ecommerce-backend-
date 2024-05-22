import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const result = await productServices.insertProdeuctIntoDB(product);

    res.status(200).json({
      status: true,
      message: "Product created successfully!",
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

const getProducts = async (req: Request, res: Response) => {
  try {
    const query = req.query.searchTerm as string;

    const result = await productServices.getProductsFromDB(query);

    res.status(200).json({
      status: true,
      message: "Product created successfully!",
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

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getProductByIdFromDB(productId);
    res.status(200).json({
      status: true,
      message: "Product fetched successfully!",
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

const updateProductInfo = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateDatas = req.body;
    const result = await productServices.updateProductInfoOnDB(
      productId,
      updateDatas
    );
    res.status(200).json({
      status: true,
      message: "Product Update successfully!",
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteProductFromDB(productId);
    res.status(200).json({
      status: true,
      message: "Product delete successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Samting went worng",
      data: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getProducts,
  getProductById,
  updateProductInfo,
  deleteProduct,
};
