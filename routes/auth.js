const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const isAuthenticated = require("../middleware/authMiddleware");

router.get("/protected-route", isAuthenticated, (req, res) => {});

router.get("/register", authController.registerForm);
router.post("/register", authController.registerUser);
router.get("/login", authController.loginForm);
router.post("/login", authController.loginUser);
router.get("/logout", authController.logoutUser);

module.exports = router;

router.get("/some-route", (req, res) => {
  res.render("someView", {
    user: req.session.userId,
  });
});
