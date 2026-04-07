const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// faqat public papkani ochadi
app.use(express.static(path.join(__dirname, "public")));

// test
app.get("/test", (req, res) => {
  res.send("WORKING ✅");
});

// asosiy sahifa
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
