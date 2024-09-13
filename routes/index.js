const express = require("express");
const router = express.Router();
const dataStore = require("../dataStore"); // Import the dataStore module

// Define routes
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
  const datas = dataStore.getDatas(); // Get the data from the store
  res.render("home", { logoUrl, datas });
});

router.get("/contact", (req, res) => {
  const logoUrl =
    "https://portal.innobrains.pk/files/system/_file64d57376183f5-site-logo.png";
  res.render("contactUs", { logoUrl });
});

module.exports = router;
