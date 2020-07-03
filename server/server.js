const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "..", "client", "build")));
console.log(
  "First path name is " + path.join(__dirname, "..", "client", "build")
);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});
console.log(
  "The path name is " +
    path.join(__dirname, "..", "client", "build", "index.html")
);
app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
