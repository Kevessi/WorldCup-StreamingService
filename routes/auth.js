const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const isAuthenticated = require("../middleware/authMiddleware");

router.get("/protected-route", isAuthenticated, (req, res) => {
  // Protected route logic
});

router.get("/register", authController.registerForm);
router.post("/register", authController.registerUser);
router.get("/login", authController.loginForm);
router.post("/login", authController.loginUser);
router.get("/logout", authController.logoutUser);

module.exports = router;
