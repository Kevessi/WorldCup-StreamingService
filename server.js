const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
require("dotenv").config();

const app = express();

// Set Pug as the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware for parsing request bodies and serving static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "resources")));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

// Import routes
const authRoutes = require("./routes/auth");
const videoRoutes = require("./routes/video");

// Use routes
app.use("/auth", authRoutes);
app.use("/video", videoRoutes);

// Home route
app.get("/", (req, res) => {
  res.render("index");
});

//test route for troubleshooting
app.get("/test", (req, res) => {
  res.send("This is a test");
});

// Server listening on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
