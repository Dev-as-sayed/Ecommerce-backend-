import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const insertProdeuctIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getProductsFromDB = async (query: string) => {
  let result;
  if (query!) {
    result = await ProductModel.find({
      $or: [
        { name: { $regex: query, $options: "i" } }, // Case-insensitive search for name
        { description: { $regex: query, $options: "i" } }, // Case-insensitive search for description
      ],
    });
  } else {
    result = await ProductModel.find();
  }
  return result;
};

const getProductByIdFromDB = async (productId: String) => {
  const result = await ProductModel.findOne({ _id: productId });
  return result;
};

const updateProductInfoOnDB = async (productId: String, updateDatas: any) => {
  const filter = { _id: productId };
  const update = { updateDatas };

  console.log(update);

  const resultProsess = await ProductModel.findOneAndUpdate(
    filter,
    { $set: update },
    {
      new: true,
    }
  );
  const result = await ProductModel.findOne(filter);
  return { resultProsess, result };
};

const deleteProductFromDB = async (productId: string) => {
  const result = await ProductModel.deleteOne({ _id: productId });
  return result;
};

export const productServices = {
  insertProdeuctIntoDB,
  getProductsFromDB,
  getProductByIdFromDB,
  updateProductInfoOnDB,
  deleteProductFromDB,
};
