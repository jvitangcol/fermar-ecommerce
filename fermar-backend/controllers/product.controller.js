import ProductModel from "../models/product.model.js";
import { catchAsyncError } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs";
import path from "path";

// add product by admin
export const addProduct = catchAsyncError(async (req, res, next) => {
  try {
    const { name, description, price, material, weight, dimensions } = req.body;

    let productImages = [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const myCloud = await cloudinary.uploader.upload(file.path, {
          folder: "Product",
        });

        productImages.push({
          public_id: myCloud.public_id,
          url: myCloud.url,
        });

        fs.unlink(file.path, (err) => {
          if (err) console.error("Failed to delete temp file:", file.path);
        });
      }
    }

    const newProduct = await ProductModel.create({
      name,
      description,
      price,
      images: productImages,
      material,
      weight,
      dimensions,
    });

    res.status(201).json({
      success: true,
      message: "New product created",
      newProduct,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// GET: get all products
export const getAllProducts = catchAsyncError(async (req, res, next) => {
  try {
    const products = await ProductModel.find();

    if (products.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No subject found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Products are successfully retrieved",
      products,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// Get single product
export const getProductById = catchAsyncError(async (req, res, next) => {
  try {
    const { productId } = req.params;

    const product = await ProductModel.findById(productId);

    if (!product) {
      return next(new ErrorHandler("Couldn't find the product"));
    }

    res.status(200).json({
      success: true,
      message: `Product ${product.name} is successfully retrieved`,
      product,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// Update product
export const updateProduct = catchAsyncError(async (req, res, next) => {
  try {
    const { productId } = req.params;
    const { name, description, price, material, weight, dimensions } = req.body;

    const product = await ProductModel.findById(productId);

    if (!product) {
      return next(new ErrorHandler("No product found", 404));
    }

    const updatedProduct = {
      name,
      description,
      price,
      material,
      weight,
      dimensions,
    };

    const newProduct = await ProductModel.findByIdAndUpdate(
      productId,
      updatedProduct,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!newProduct) {
      return next(new ErrorHandler("No product found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Product is successfully update",
      newProduct,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// delete product only for admin role
export const deleteProduct = catchAsyncError(async (req, res, next) => {
  try {
    const { productId } = req.params;

    const product = await ProductModel.findByIdAndDelete(productId);

    if (!product) {
      return next(new ErrorHandler("Couldn't delete product"));
    }

    res.status(200).json({
      success: true,
      message: `Product ${product.name} delete successfully`,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});
