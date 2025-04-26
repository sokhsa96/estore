const User = require('../models/User');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user, req.body, {
    new: true,
  });
  res.json(user);
};
