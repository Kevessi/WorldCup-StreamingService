const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
require("dotenv").config();

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "resources")));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

const authRoutes = require("./routes/auth");
const videoRoutes = require("./routes/video");

app.use("/auth", authRoutes);
app.use("/video", videoRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/test", (req, res) => {
  res.send("This is a test");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
