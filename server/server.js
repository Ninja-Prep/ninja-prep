const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
