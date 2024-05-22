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
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const result = yield product_service_1.productServices.insertProdeuctIntoDB(product);
        res.status(200).json({
            status: true,
            message: "Product created successfully!",
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
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query.searchTerm;
        const result = yield product_service_1.productServices.getProductsFromDB(query);
        res.status(200).json({
            status: true,
            message: "Product created successfully!",
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
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.getProductByIdFromDB(productId);
        res.status(200).json({
            status: true,
            message: "Product fetched successfully!",
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
const updateProductInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateDatas = req.body;
        const result = yield product_service_1.productServices.updateProductInfoOnDB(productId, updateDatas);
        res.status(200).json({
            status: true,
            message: "Product Update successfully!",
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
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.deleteProductFromDB(productId);
        res.status(200).json({
            status: true,
            message: "Product delete successfully!",
            data: null,
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
exports.ProductController = {
    createProduct,
    getProducts,
    getProductById,
    updateProductInfo,
    deleteProduct,
};
