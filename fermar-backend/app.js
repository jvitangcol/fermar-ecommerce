import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import { ErrorMiddleware } from "./middleware/error.js";
import connectDB from "./utils/db.js";

import userRouter from "./routes/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cookie parser
app.use(cookieParser());

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Port listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});

app.use("/api/v1", userRouter);

// API Testing
app.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

// Unknown route
// app.all("*", (req, res, next) => {
//   const err = new Error(`Route not found`);

//   err.statusCode = 404;
//   next(err);
// });

// app.use(ErrorMiddleware);
