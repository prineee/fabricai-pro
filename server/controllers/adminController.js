import User from "../models/User.js";
import Chat from "../models/Chat.js";

export const getAdminStats = async (
  req,
  res
) => {
  try {
    const totalUsers =
      await User.countDocuments();

    const freeUsers =
      await User.countDocuments({
        plan: "free",
      });

    const proUsers =
      await User.countDocuments({
        plan: "pro",
      });

    const totalChats =
      await Chat.countDocuments();

    const totalAIUsage =
      await User.aggregate([
        {
          $group: {
            _id: null,

            total: {
              $sum: "$aiUsage",
            },
          },
        },
      ]);

    res.json({
      success: true,

      stats: {
        totalUsers,
        freeUsers,
        proUsers,
        totalChats,

        totalAIUsage:
          totalAIUsage[0]?.total || 0,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Admin stats failed",
    });
  }
};

export const getAllUsers = async (
  req,
  res
) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};

export const upgradeUserPlan =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.params.id
        );

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      user.plan = "pro";

      user.subscriptionStatus =
        "active";

      user.aiLimit = 999999;

      await user.save();

      res.json({
        success: true,
        message:
          "User upgraded to PRO",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Upgrade failed",
      });
    }
  };

export const resetUserUsage =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.params.id
        );

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      user.aiUsage = 0;

      await user.save();

      res.json({
        success: true,
        message:
          "Usage reset successful",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Reset failed",
      });
    }
  };

export const deleteUser = async (
  req,
  res
) => {
  try {
    const user =
      await User.findById(
        req.params.id
      );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await User.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message: "User deleted",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message:
        "Delete failed",
    });
  }
};