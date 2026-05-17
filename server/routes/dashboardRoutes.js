const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    res.json({
      users: totalUsers,
      revenue: 25000,
      orders: 120,
    });
  } catch (error) {
    res.status(500).json({
      message: "Dashboard failed",
    });
  }
});

module.exports = router;