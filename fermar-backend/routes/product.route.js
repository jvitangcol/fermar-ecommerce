import express from "express";
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { isAuthenticated, authorizeRoles } from "../middleware/auth.js";
import upload from "../middleware/multerConfig.js";

const productRouter = express.Router();

productRouter.post(
  "/admin/products",
  isAuthenticated,
  authorizeRoles("admin"),
  upload.array("images"),
  addProduct
);

productRouter.get("/products", getAllProducts);

productRouter.get("/products/:productId", getProductById);

productRouter.put(
  "/admin/products/:productId",
  isAuthenticated,
  authorizeRoles("admin"),
  updateProduct
);

productRouter.delete(
  "/admin/products/:productId",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteProduct
);

export default productRouter;
