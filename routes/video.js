const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");
const isAuthenticated = require("../middleware/authMiddleware");
router.get("/protected-route", isAuthenticated, (req, res) => {});

router.get("/new_video", isAuthenticated, videoController.newVideoForm);
router.post("/new", isAuthenticated, videoController.addNewVideo);
router.get("/dashboard", isAuthenticated, videoController.videoDashboard);

module.exports = router;
// In your routes file (e.g., auth.js or video.js)
router.get("/some-route", (req, res) => {
  // ... some logic ...

  // Pass 'user' to the view
  res.render("someView", {
    user: req.session.userId, // This could be a boolean or user object
  });
});
