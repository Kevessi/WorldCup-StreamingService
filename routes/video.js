const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");
const isAuthenticated = require("../middleware/authMiddleware");
router.get("/protected-route", isAuthenticated, (req, res) => {

});

router.get("/new_video", isAuthenticated, videoController.newVideoForm);
router.post("/new", isAuthenticated, videoController.addNewVideo);
router.get("/dashboard", isAuthenticated, videoController.videoDashboard);
module.exports = router;
