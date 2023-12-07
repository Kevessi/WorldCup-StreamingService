// controllers/videoController.js
const { readDataFromFile, writeDataToFile } = require("../data/dataHandler");

exports.newVideoForm = (req, res) => {
  res.render("newVideo"); // Render the form for submitting new videos
};

exports.addNewVideo = (req, res) => {
  const videos = readDataFromFile("videos.json");
  const { url, title } = req.body;
  const newVideo = { url, title, uploader: req.session.userId };

  videos.push(newVideo);
  writeDataToFile("videos.json", videos);

  res.redirect("/video/dashboard"); // Redirect to dashboard after adding video
};

exports.videoDashboard = (req, res) => {
  const videos = readDataFromFile("videos.json");
  const userVideos = videos.filter(
    (video) => video.uploader === req.session.userId
  );

  res.render("dashboard", { videos: userVideos }); // Render the dashboard view with user's videos
};
