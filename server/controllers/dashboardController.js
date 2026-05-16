import User from "../models/User.js";

export const getDashboardData = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.json({
      success: true,

      stats: {
        aiUsage: user.aiUsage || 0,

        aiLimit:
          user.plan === "pro"
            ? "Unlimited"
            : user.aiLimit || 20,

        remaining:
          user.plan === "pro"
            ? "Unlimited"
            : (user.aiLimit || 20) -
              (user.aiUsage || 0),

        plan: user.plan || "free",

        subscriptionStatus:
          user.subscriptionStatus || "inactive",
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Dashboard Error",
    });
  }
};