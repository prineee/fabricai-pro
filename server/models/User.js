import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,

    email: {
      type: String,
      unique: true,
    },

    password: String,

    avatar: String,

    company: String,

    role: {
      type: String,
      default: "user",
    },

    organization: {
      type:
        mongoose.Schema.Types.ObjectId,

      ref: "Organization",
    },

    workspaceRole: {
      type: String,
      default: "member",
    },

    plan: {
      type: String,
      default: "free",
    },

    subscriptionStatus: {
      type: String,
      default: "inactive",
    },

    razorpayCustomerId: String,

    razorpaySubscriptionId: String,

    stripeCustomerId: String,

    stripeSubscriptionId: String,

    aiUsage: {
      type: Number,
      default: 0,
    },

    aiLimit: {
      type: Number,
      default: 20,
    },

    apiKey: String,

    lastUsageReset: Date,
  },

  {
    timestamps: true,
  }
);

export default mongoose.model(
  "User",
  userSchema
);