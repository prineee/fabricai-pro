import mongoose from "mongoose";

const invoiceSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",
      },

      amount: Number,

      currency: String,

      paymentId: String,

      status: String,

      invoiceNumber: String,
    },

    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Invoice",
  invoiceSchema
);