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
exports.productServices = void 0;
const product_model_1 = require("./product.model");
const insertProdeuctIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(product);
    return result;
});
const getProductsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (query) {
        result = yield product_model_1.ProductModel.find({
            $or: [
                { name: { $regex: query, $options: "i" } }, // Case-insensitive search for name
                { description: { $regex: query, $options: "i" } }, // Case-insensitive search for description
            ],
        });
    }
    else {
        result = yield product_model_1.ProductModel.find();
    }
    return result;
});
const getProductByIdFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findOne({ _id: productId });
    return result;
});
const updateProductInfoOnDB = (productId, updateDatas) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = { _id: productId };
    const update = { updateDatas };
    console.log(update);
    const resultProsess = yield product_model_1.ProductModel.findOneAndUpdate(filter, { $set: update }, {
        new: true,
    });
    const result = yield product_model_1.ProductModel.findOne(filter);
    return { resultProsess, result };
});
const deleteProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.deleteOne({ _id: productId });
    return result;
});
exports.productServices = {
    insertProdeuctIntoDB,
    getProductsFromDB,
    getProductByIdFromDB,
    updateProductInfoOnDB,
    deleteProductFromDB,
};
