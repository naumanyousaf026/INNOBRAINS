const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const dataStore = require("./dataStore"); // Import the dataStore module

// Set view engine to EJS
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Import your routes
const indexRoutes = require("./routes/index"); // No need to pass `datas` here

// Use the routes
app.use("/", indexRoutes);

app.post("/contact", (req, res) => {
  const dataForm = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };

  dataStore.addData(dataForm); // Add data to the store
  res.redirect("/homes");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
