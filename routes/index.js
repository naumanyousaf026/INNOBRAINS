const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const logoUrl =
    "https://portal.innobrains.pk/files/system/_file64d57376183f5-site-logo.png";
  const dynamicContent = "<p>Welcome to my blog!</p>";
  res.render("index", { title: "My Blog", logoUrl, body: dynamicContent });
});

router.get("/blogs", (req, res) => {
  const logoUrl =
    "https://portal.innobrains.pk/files/system/_file64d57376183f5-site-logo.png";
  res.render("blog", { logoUrl });
});

router.get("/homes", (req, res) => {
  const logoUrl =
    "https://portal.innobrains.pk/files/system/_file64d57376183f5-site-logo.png";
  res.render("home", { logoUrl });
});

module.exports = router;
