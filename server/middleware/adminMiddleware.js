export const adminOnly = (
  req,
  res,
  next
) => {
  try {
    if (
      req.user &&
      req.user.role === "admin"
    ) {
      next();
    } else {
      return res.status(403).json({
        success: false,
        message:
          "Admin access only",
      });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
    });
  }
};