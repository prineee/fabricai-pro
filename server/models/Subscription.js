const mongoose = require("mongoose");

const subscriptionSchema =
  new mongoose.Schema(
    {
      userId: String,

      plan: String,

      amount: Number,

      status: {
        type: String,
        default: "active",
      },

      expiryDate: Date,
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Subscription",
  subscriptionSchema
);