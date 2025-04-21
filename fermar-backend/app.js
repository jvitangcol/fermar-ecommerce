import express from "express";
import dotenv from "dotenv";

import { ErrorMiddleware } from "./middleware/error.js";
import connectDB from "./utils/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Port listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});

// app.use("/api/v1");

// API Testing
app.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

// Unknown route
// app.all("*", (req, res, next) => {
//   const err = new Error(`Route ${req.originalUrl} not found`);
//   err.statusCode = 404;
//   next(err);
// });

// app.use(ErrorMiddleware);
