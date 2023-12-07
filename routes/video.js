const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");
const isAuthenticated = require("../middleware/authMiddleware"); // Assuming you have this middleware
router.get("/protected-route", isAuthenticated, (req, res) => {
  // Protected route logic
});

router.get("/new_video", isAuthenticated, videoController.newVideoForm);
router.post("/new", isAuthenticated, videoController.addNewVideo);
router.get(
  "/dashboard/:videoFilter",
  isAuthenticated,
  videoController.videoDashboard
);

module.exports = router;
