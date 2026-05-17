const express = require("express");
const router = express.Router";

router.get("/", async (req, res) => {
  try {

    const dashboardData = {
      users: 125,
      revenue: 45200,
      orders: 89,
    };

    res.json(dashboardData);

  } catch (error) {

    res.status(500).json({
      message: "Dashboard fetch failed",
    });

  }
});

module.exports = router;