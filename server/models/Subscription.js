import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    plan: {
      type: String,
      default: "free",
    },

    amount: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      default: "inactive",
    },

    paymentId: {
      type: String,
    },

    startDate: {
      type: Date,
      default: Date.now,
    },

    endDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Subscription = mongoose.model(
  "Subscription",
  subscriptionSchema
);

export default Subscription;