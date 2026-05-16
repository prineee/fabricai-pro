import User from "../models/User.js";

export const checkAIUsage = async (
  req,
  res,
  next
) => {
  try {
    const user = await User.findById(
      req.user.id
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const now = new Date();

    const lastReset = new Date(
      user.lastUsageReset
    );

    const diffDays =
      (now - lastReset) /
      (1000 * 60 * 60 * 24);

    if (diffDays >= 30) {
      user.aiUsage = 0;
      user.lastUsageReset = now;

      await user.save();
    }

    if (
      user.plan === "free" &&
      user.aiUsage >= user.aiLimit
    ) {
      return res.status(403).json({
        success: false,
        message:
          "Free AI limit reached. Upgrade to Pro.",
      });
    }

    req.userData = user;

    next();
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "AI middleware error",
    });
  }
};