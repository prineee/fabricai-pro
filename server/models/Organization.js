import mongoose from "mongoose";

const organizationSchema =
  new mongoose.Schema(
    {
      name: String,

      owner: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",
      },

      members: [
        {
          type:
            mongoose.Schema.Types.ObjectId,

          ref: "User",
        },
      ],

      plan: {
        type: String,
        default: "free",
      },

      subscriptionStatus: {
        type: String,
        default: "inactive",
      },
    },

    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Organization",
  organizationSchema
);