import mongoose from "mongoose";

const aiResultSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    prompt: {
      type: String,
      required: true,
    },

    result: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AIResult = mongoose.model(
  "AIResult",
  aiResultSchema
);

export default AIResult;