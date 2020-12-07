const express = require("express");
const app = express();
const middleWare = require("./src/imports/middlewareSetup")(app);
const routers = require("./src/routes/routerHandler")(app);
const passport = require("./src/imports/passportSetup");
const mongoose = require("./src/imports/mongooseSetup");
const keys = require("./config/keys");
const path = require("path");

const PORT = process.env.PORT || process.argv[2] || 5000;

const inProduction = process.env.NODE_ENV.trim() === "production";

if (inProduction) {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});