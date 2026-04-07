const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Static fayllar
app.use(express.static(__dirname));

// Test route (MUHIM)
app.get("/test", (req, res) => {
  res.send("WORKING ✅");
});

// Asosiy sahifa
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Server start
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
