const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/authController");

router.get("/register", (req, res) => res.render("register", { title: "Register" }));
router.post("/register", register);

router.get("/login", (req, res) =>  res.render("login", { title: "Login" }));
router.post("/login", login);

router.get("/logout", logout);

module.exports = router;





