const User = require("../models/User");

exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({
      success: true,
      user
    });
  } catch (error) {
    next(error);
  }
};
