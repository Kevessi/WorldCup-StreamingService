const { readDataFromFile, writeDataToFile } = require("../data/dataHandler");

exports.newVideoForm = (req, res) => {
  res.render("newVideo");
};

exports.addNewVideo = (req, res) => {
  const videos = readDataFromFile("videos.json");
  const { url, title } = req.body;

  // Validate input
  if (!url || !title) {
    return res.render("newVideo", { error: "All fields are required." });
  }

  const newVideo = { url, title, uploader: req.session.userId };
  videos.push(newVideo);
  writeDataToFile("videos.json", videos);

  res.redirect("/video/dashboard");
};

// exports.videoDashboard = (req, res) => {
//   const videos = readDataFromFile("videos.json");
//   const userVideos = videos.filter(
//     (video) => video.uploader === req.session.userId
//   );

//   res.render("dashboard", { videos: userVideos });
// };
exports.videoDashboard = (req, res) => {
  const videos = readDataFromFile("videos.json");
  const userVideos = videos.filter(video => video.uploader === req.session.userId);

  // Pass 'user' to the view for conditional rendering in layout
  res.render("dashboard", { 
      user: req.session.userId, // This could be a boolean or user object
      videos: userVideos 
  });
};
