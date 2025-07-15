
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const SECRET = "MY_SECRET";

exports.register = async (req, res) => {
  const { fullname, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.create({ fullname, email, password: hash });
  res.redirect("/login");
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.send("User not found");
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.send("Invalid password");
  const token = jwt.sign({ id: user._id }, SECRET);
  res.cookie("token", token, { httpOnly: true });
  res.redirect("/expenses");
};


exports.logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};