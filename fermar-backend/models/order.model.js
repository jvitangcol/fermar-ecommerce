import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    totalAmount: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pending", "preparing", "delivered"],
      default: "pending",
      require: true,
    },
    paymentMethod: {
      type: String,
      enum: ["gCash", "paymaya", "cod"],
      default: "cod",
      require: true,
    },
    shippingAddress: {
      street: {
        type: String,
        require: true,
      },
      city: {
        type: String,
        require: true,
      },
      province: {
        type: String,
        require: true,
      },
      zipcode: {
        type: String,
        require: true,
      },
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
      },
    ],
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("Order", orderSchema);

export default OrderModel;
