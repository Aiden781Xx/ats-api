const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register API
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: '✅ Registered successfully', user });
  } catch (err) {
    res.status(500).json({ message: '❌ Registration failed', error: err });
  }
};

// Update Profile API
exports.updateProfile = async (req, res) => {
  const { email, name, phone, linkedin } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { name, phone, linkedin },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: '✅ Profile updated', user });
  } catch (err) {
    res.status(500).json({ message: '❌ Update failed', error: err });
  }
};



// LOGIN API
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    res.status(200).json({ message: "✅ Login successful", token, user });
  } catch (err) {
    res.status(500).json({ message: "❌ Login failed", error: err });
  }
};
