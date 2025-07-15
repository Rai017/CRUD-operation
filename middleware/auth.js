const jwt = require("jsonwebtoken");
const SECRET = "MY_SECRET";

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect("/login");
  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.redirect("/login");
  }
};
