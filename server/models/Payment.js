const mongoose = require("mongoose");

const paymentSchema =
  new mongoose.Schema(
    {
      userId: String,

      orderId: String,

      paymentId: String,

      amount: Number,

      status: String,

      plan: String,
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Payment",
  paymentSchema
);