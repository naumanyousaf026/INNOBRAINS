const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Set view engine to EJS
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Import your routes
const indexRoutes = require("./routes/index");

// Use the routes
app.use("/", indexRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
